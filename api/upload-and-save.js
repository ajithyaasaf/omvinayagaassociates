import { createDataInFirebaseTransactional } from './firebase-operations.js';
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';

// Cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer memory storage
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 10 * 1024 * 1024 }
});

// We need to disable the default body parser to let Multer consume the request stream
export const config = {
    api: {
        bodyParser: false,
    },
};

// Express middleware wrapper
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) return reject(result);
            return resolve(result);
        });
    });
}

export default async function handler(req, res) {
    // CORS configuration
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    try {
        // Process the multipart form data using Multer
        await runMiddleware(req, res, upload.single('file'));

        if (!req.file) {
            return res.status(400).json({ success: false, message: 'No file provided' });
        }

        const { title, description, category } = req.body;
        const isVideo = req.file.mimetype.startsWith('video/');
        const folder = isVideo ? 'omvinayagaassociates/videos' : 'omvinayagaassociates/photos';
        const resourceType = isVideo ? 'video' : 'image';

        // Upload the file buffer to Cloudinary via a stream
        const uploadResult = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { folder, resource_type: resourceType },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            );
            uploadStream.end(req.file.buffer);
        });

        // Create the gallery item metadata
        const galleryItem = {
            title: title || req.file.originalname,
            description: description || '',
            category: category || 'General',
            mediaUrl: uploadResult.secure_url,
            publicId: uploadResult.public_id,
            type: resourceType,
            order: 0,
        };

        // Save to Firebase
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
            message: 'Upload failed',
            error: error.message
        });
    }
}
