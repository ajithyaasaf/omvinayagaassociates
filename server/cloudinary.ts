import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';

// Configure Cloudinary with User credentials
cloudinary.config({
    cloud_name: 'doeodacsg',
    api_key: '269267633995791',
    api_secret: 'wUw9Seu6drQEIbQ1tAvYeVyqHdU',
    secure: true
});

/**
 * Uploads a file buffer directly to Cloudinary via stream (fast, no base64 overhead).
 * @param {Buffer} buffer - The raw file buffer from multer
 * @param {'image' | 'video'} type - Controls the target folder and resource type
 * @param {string} mimeType - The mime type of the file
 */
export async function uploadToCloudinary(buffer: Buffer, type: 'image' | 'video', mimeType?: string) {
    const folder = type === 'video' ? 'omvinayagaassociates/videos' : 'omvinayagaassociates/photos';
    const resourceType = type === 'video' ? 'video' : 'image';

    return new Promise<{ success: boolean; url?: string; publicId?: string; format?: string; type?: string; message?: string }>((resolve) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                folder,
                resource_type: resourceType,
                allowed_formats: ['jpg', 'png', 'jpeg', 'gif', 'webp', 'mp4', 'webm', 'mov'],
                // Auto-optimize images for faster delivery
                ...(type === 'image' ? { quality: 'auto', fetch_format: 'auto' } : {}),
            },
            (error, result) => {
                if (error || !result) {
                    console.error('Cloudinary stream upload error:', error);
                    resolve({ success: false, message: error?.message || 'Upload failed' });
                } else {
                    resolve({
                        success: true,
                        url: result.secure_url,
                        publicId: result.public_id,
                        format: result.format,
                        type: result.resource_type
                    });
                }
            }
        );

        // Pipe the raw buffer directly — no base64 overhead
        const readable = new Readable();
        readable.push(buffer);
        readable.push(null);
        readable.pipe(uploadStream);
    });
}


/**
 * Deletes an asset from Cloudinary
 * @param {string} publicId - The public ID of the asset
 * @param {'image' | 'video'} resourceType - Type of resource
 */
export async function deleteFromCloudinary(publicId: string, resourceType: 'image' | 'video' = 'image') {
    try {
        const result = await cloudinary.uploader.destroy(publicId, { resource_type: resourceType });
        return result.result === 'ok';
    } catch (error) {
        console.error('Cloudinary delete error:', error);
        return false;
    }
}
