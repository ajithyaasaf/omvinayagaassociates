
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Correctly resolving paths relative to script location
const ASSETS_DIR = path.resolve(__dirname, '../client/src/assets');
const PUBLIC_DIR = path.resolve(__dirname, '../client/public/optimized');

console.log(`Assets Directory: ${ASSETS_DIR}`);

if (!fs.existsSync(ASSETS_DIR)) {
    console.error(`ERROR: Assets directory not found at ${ASSETS_DIR}`);
    process.exit(1);
}


const imagesToOptimize = [
    { name: 'team-achievement.png', quality: 90, width: 1200 },
    { name: 'img1.png', quality: 90, width: 800 },
    { name: 'sealants.png', quality: 90, width: 600 },
    { name: 'thermal.png', quality: 90, width: 400 },
    { name: 'new.jpg', quality: 90, width: 800 },
];

async function optimize() {
    console.log('Starting High-Quality Image Optimization...');

    for (const img of imagesToOptimize) {
        const inputPath = path.join(ASSETS_DIR, img.name);
        // Determine output extension based on input
        const ext = path.extname(img.name);
        const basename = path.basename(img.name, ext);
        const outputName = `${basename}.webp`;
        const outputPath = path.join(ASSETS_DIR, outputName);

        try {
            if (fs.existsSync(inputPath)) {
                const metadata = await sharp(inputPath).metadata();
                const initialSizeMB = (metadata.size / 1024 / 1024).toFixed(2);
                console.log(`Processing: ${img.name} (${initialSizeMB} MB)`);

                await sharp(inputPath)
                    .resize({ width: img.width, withoutEnlargement: true })
                    .webp({ quality: img.quality, lossless: false, effort: 6 })
                    .toFile(outputPath);

                // Verify output exists and get size
                if (fs.existsSync(outputPath)) {
                    const newMetadata = await sharp(outputPath).metadata();
                    const newSizeKB = (newMetadata.size / 1024).toFixed(2);
                    const savingPercent = ((1 - newMetadata.size / metadata.size) * 100).toFixed(2);

                    console.log(`  -> Optimized: ${outputName} (${newSizeKB} KB)`);
                    console.log(`  -> Saved: ${savingPercent}%`);
                } else {
                    console.error(`  -> Failed to create ${outputName}`);
                }

            } else {
                console.warn(`Warning: File not found ${inputPath}`);
            }
        } catch (error) {
            console.error(`Error processing ${img.name}:`, error);
        }
    }
}

optimize();
