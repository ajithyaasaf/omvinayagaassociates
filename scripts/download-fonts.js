
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FONTS_DIR = path.resolve(__dirname, '../client/public/fonts');

if (!fs.existsSync(FONTS_DIR)) {
    fs.mkdirSync(FONTS_DIR, { recursive: true });
}

const CSS_URL = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap';
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

async function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
}

async function fetchCss() {
    return new Promise((resolve, reject) => {
        const options = {
            headers: { 'User-Agent': USER_AGENT }
        };
        https.get(CSS_URL, options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

function extractFontUrls(css) {
    // Simple regex to find latin subset URLs or just take the last ones which are usually latin
    // Google fonts returns multiple blocks. We want 400 and 700.
    // The CSS format is:
    // /* latin */
    // @font-face {
    //   font-family: 'Montserrat';
    //   font-style: normal;
    //   font-weight: 400;
    //   src: url(https://...) format('woff2');
    // }

    const blocks = css.split('}');
    const fonts = {};

    blocks.forEach(block => {
        if (block.includes('font-family: \'Montserrat\'') && block.includes('src: url')) {
            const weightMatch = block.match(/font-weight:\s*(\d+)/);
            const urlMatch = block.match(/src:\s*url\((.*?)\)/);
            const subsetMatch = block.includes('/* latin */');

            if (weightMatch && urlMatch && subsetMatch) {
                const weight = weightMatch[1];
                const url = urlMatch[1];
                fonts[weight] = url;
            }
        }
    });
    return fonts;
}

async function run() {
    console.log('Fetching CSS...');
    try {
        const css = await fetchCss();
        const fontUrls = extractFontUrls(css);

        if (fontUrls['400']) {
            console.log(`Downloading Regular (400) from ${fontUrls['400']}...`);
            await downloadFile(fontUrls['400'], path.join(FONTS_DIR, 'Montserrat-Regular.woff2'));
        }

        if (fontUrls['700']) {
            console.log(`Downloading Bold (700) from ${fontUrls['700']}...`);
            await downloadFile(fontUrls['700'], path.join(FONTS_DIR, 'Montserrat-Bold.woff2'));
        }

        console.log('Fonts downloaded successfully!');

    } catch (error) {
        console.error('Error:', error);
    }
}

run();
