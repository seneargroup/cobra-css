const fs = require('fs');
const path = require('path');

// Define source and output directories
const srcDir = path.join(__dirname, 'src');
const distDir = path.join(__dirname, 'dist');
const outFile = path.join(distDir, 'cobra-utilities.css');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Find all CSS files in src directory
const cssFiles = fs.readdirSync(srcDir).filter(file => file.endsWith('.css'));

let combinedCss = '';

// Read and concatenate each CSS file
cssFiles.forEach(file => {
  const filePath = path.join(srcDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  combinedCss += `/* ===== File: ${file} ===== */\n${content}\n\n`;
});

// Write combined output to dist/cobra-utilities.css
fs.writeFileSync(outFile, combinedCss);

console.log(`Build complete! Generated ${outFile}`);
