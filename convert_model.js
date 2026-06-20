const fs = require('fs');
const path = require('path');

const glbPath = path.join(__dirname, 'models', 'mouse.glb');
const jsPath = path.join(__dirname, 'models', 'mouse_model.js');

try {
    const buffer = fs.readFileSync(glbPath);
    const base64 = buffer.toString('base64');
    const dataUri = `data:application/octet-stream;base64,${base64}`;

    const jsContent = `window.mouseGLBData = "${dataUri}";\n`;
    fs.writeFileSync(jsPath, jsContent);
    console.log('Successfully converted mouse.glb to mouse_model.js!');
} catch (e) {
    console.error('Failed to convert model:', e.message);
}
