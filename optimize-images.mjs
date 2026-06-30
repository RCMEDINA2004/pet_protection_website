import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, 'src', 'assets');

// Images to optimize
const imagesToOptimize = [
  'con_seguro.png',
  'sin_seguro.png',
  'logopet-sinFondoC.png',
  'golden_wapp.jpg',
  'photo_1.jpg',
  'photo_2.jpg',
  'wallpaperPet.jpg',
  'wallpp.jpg'
];

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...');
  
  for (const filename of imagesToOptimize) {
    const filepath = path.join(assetsDir, filename);
    
    if (!fs.existsSync(filepath)) {
      console.log(`⚠️  Skipped ${filename} (not found)`);
      continue;
    }

    const stats = fs.statSync(filepath);
    const originalSize = stats.size;

    try {
      if (filename.endsWith('.png')) {
        // Optimize PNG with compression
        await sharp(filepath)
          .png({ 
            quality: 80, 
            effort: 10, // Maximum compression
            progressive: true 
          })
          .toFile(`${filepath}.tmp`);
      } else if (filename.endsWith('.jpg') || filename.endsWith('.jpeg')) {
        // Optimize JPEG
        await sharp(filepath)
          .jpeg({ 
            quality: 80, 
            mozjpeg: true, // Use mozjpeg for better compression
            progressive: true 
          })
          .toFile(`${filepath}.tmp`);
      }

      const newStats = fs.statSync(`${filepath}.tmp`);
      const newSize = newStats.size;
      const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(2);

      fs.renameSync(`${filepath}.tmp`, filepath);
      
      console.log(`✅ ${filename} | ${(originalSize / 1024).toFixed(2)}KB → ${(newSize / 1024).toFixed(2)}KB (-${reduction}%)`);
    } catch (error) {
      console.error(`❌ Error optimizing ${filename}:`, error.message);
    }
  }
  
  console.log('✨ Image optimization complete!');
}

optimizeImages();
