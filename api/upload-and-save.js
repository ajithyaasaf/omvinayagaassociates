import { createDataInFirebaseTransactional } from './firebase-operations.js';
import { v2 as cloudinary } from 'cloudinary';
import { z } from 'zod';

// Shared Gallery Schema (duplicated here for standalone Vercel compatibility)
const gallerySchema = z.object({
    id: z.number().optional(),
    title: z.string().min(1, "Title is required"),
    description: z.string().optional().default(""),
    mediaUrl: z.string().url("Must be a valid URL"),
    type: z.enum(["image", "video"]),
    category: z.string().optional().default("General"),
    order: z.number().optional().default(0),
    createdAt: z.string().optional()
});

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
        if (!req.body) {
            return res.status(400).json({ success: false, message: 'Request body is missing' });
        }

        const { fileBase64, mimeType, title, description, category } = req.body;

        if (!fileBase64) {
            return res.status(400).json({ success: false, message: 'fileBase64 is required' });
        }
        if (!mimeType) {
            return res.status(400).json({ success: false, message: 'mimeType is required' });
        }

        const isVideo = mimeType.startsWith('video/');
        const resourceType = isVideo ? 'video' : 'image';
        const folder = isVideo ? 'omvinayagaassociates/videos' : 'omvinayagaassociates/photos';

        // Step 1: Upload base64 string directly to Cloudinary
        const dataUri = `data:${mimeType};base64,${fileBase64}`;
        const uploadResult = await cloudinary.uploader.upload(dataUri, {
            folder,
            resource_type: resourceType,
        });

        // Step 2: Prepare and validate metadata
        const galleryItemData = {
            title: title || 'Untitled',
            description: description || '',
            category: category || 'General',
            mediaUrl: uploadResult.secure_url,
            type: resourceType,
            order: 0,
        };

        // Strict validation using Zod
        const validatedItem = gallerySchema.parse(galleryItemData);

        // Step 3: Save validated metadata to Firebase
        const firebaseResult = await createDataInFirebaseTransactional('gallery', validatedItem);

        if (firebaseResult.success) {
            return res.status(201).json({
                success: true,
                message: 'Media uploaded and validated successfully',
                item: firebaseResult.data
            });
        } else {
            throw new Error(firebaseResult.message || 'Failed to save to Firebase');
        }

    } catch (error) {
        console.error('Upload Error:', error);
        
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                success: false,
                message: 'Data validation failed',
                errors: error.errors
            });
        }

        return res.status(500).json({
            success: false,
            message: error.message || 'Upload failed'
        });
    }
}
