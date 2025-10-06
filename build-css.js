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

// Explicit list of CSS source files in order
const cssFiles = [
  'colors.css',
  'layout.css',
  'spacing.css',
  'typography.css',
  'flexbox.css',
  'border.css',
  'positioning.css',
  'states.css',
  'responsive.css'
];

// Concatenate all CSS content
let combinedCss = '';

cssFiles.forEach(file => {
  const filePath = path.join(srcDir, file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    combinedCss += `/* ===== File: ${file} ===== */\n${content}\n\n`;
  } else {
    console.warn(`Warning: File not found: ${filePath}`);
  }
});

// Write combined output to dist/cobra-utilities.css
fs.writeFileSync(outFile, combinedCss);

console.log(`Build complete! Generated ${outFile}`);
