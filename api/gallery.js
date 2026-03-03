import { getDataFromFirebase, deleteFromFirebaseTransactional } from './firebase-operations.js';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();

    try {
        if (req.method === 'GET') {
            const gallery = await getDataFromFirebase('gallery');
            const sorted = gallery.sort((a, b) => {
                if (a.order !== b.order) return (b.order || 0) - (a.order || 0);
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            });
            return res.status(200).json(sorted);
        }

        if (req.method === 'DELETE') {
            // ID may come from URL path (e.g. /api/gallery/4) or query string (?id=4)
            // Parse from URL path first, then fall back to query string
            const urlParts = (req.url || '').split('/').filter(Boolean);
            const pathId = urlParts[urlParts.length - 1]; // last segment e.g. "4"
            const id = pathId && !isNaN(parseInt(pathId)) ? pathId : req.query.id;

            if (!id || isNaN(parseInt(id))) {
                return res.status(400).json({ success: false, error: 'Valid gallery ID is required' });
            }

            // Fetch items to find the Cloudinary publicId for cleanup
            const items = await getDataFromFirebase('gallery');
            const item = items.find(i => Number(i.id) === Number(id));

            if (!item) {
                return res.status(404).json({ success: false, message: 'Gallery item not found' });
            }

            // Delete from Cloudinary if publicId stored
            if (item.publicId) {
                try {
                    await cloudinary.uploader.destroy(item.publicId, { resource_type: item.type || 'image' });
                } catch (cloudinaryError) {
                    console.error('Cloudinary delete failed (continuing anyway):', cloudinaryError.message);
                }
            }

            const result = await deleteFromFirebaseTransactional('gallery', id);

            if (result.success) {
                return res.status(200).json({ success: true, message: 'Gallery item deleted' });
            } else {
                return res.status(500).json({ success: false, message: result.message });
            }
        }

        return res.status(405).json({ error: 'Method not allowed' });
    } catch (error) {
        console.error('Gallery API error:', error);
        return res.status(500).json({ error: 'Internal server error', details: error.message });
    }
}
