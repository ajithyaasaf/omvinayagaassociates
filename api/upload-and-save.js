import { createDataInFirebaseTransactional } from './firebase-operations.js';
import { v2 as cloudinary } from 'cloudinary';

// Cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();

    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    try {
        const { fileBase64, mimeType, title, description, category } = req.body;

        if (!fileBase64 || !mimeType) {
            return res.status(400).json({ success: false, message: 'File data and mime type are required' });
        }

        const isVideo = mimeType.startsWith('video/');
        const resourceType = isVideo ? 'video' : 'image';
        const folder = isVideo ? 'omvinayagaassociates/videos' : 'omvinayagaassociates/photos';

        // Upload base64 string directly to Cloudinary
        const dataUri = `data:${mimeType};base64,${fileBase64}`;
        const uploadResult = await cloudinary.uploader.upload(dataUri, {
            folder,
            resource_type: resourceType,
        });

        // Save metadata to Firebase
        const galleryItem = {
            title: title || 'Untitled',
            description: description || '',
            category: category || 'General',
            mediaUrl: uploadResult.secure_url,
            publicId: uploadResult.public_id,
            type: resourceType,
            order: 0,
        };

        const firebaseResult = await createDataInFirebaseTransactional('gallery', galleryItem);

        if (firebaseResult.success) {
            return res.status(201).json({
                success: true,
                message: 'Media uploaded successfully',
                item: firebaseResult.data
            });
        } else {
            throw new Error(firebaseResult.message || 'Failed to save to Firebase');
        }

    } catch (error) {
        console.error('Upload Error:', error);
        return res.status(500).json({
            success: false,
            message: error.message || 'Upload failed'
        });
    }
}
