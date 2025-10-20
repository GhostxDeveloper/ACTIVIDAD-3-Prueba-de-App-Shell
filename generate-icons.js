import sharp from 'sharp';
import { readFileSync } from 'fs';

const sizes = [192, 512];

async function generateIcons() {
  for (const size of sizes) {
    const svgBuffer = readFileSync(`./public/icons/icon-${size}x${size}.svg`);

    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(`./public/icons/icon-${size}x${size}.png`);

    console.log(`✓ Generated icon-${size}x${size}.png`);
  }

  console.log('All icons generated successfully!');
}

generateIcons().catch(console.error);
