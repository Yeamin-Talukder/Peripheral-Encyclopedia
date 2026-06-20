const fs = require('fs');
const path = require('path');
const glbPath = path.join(__dirname, 'models', 'printer.glb');
const jsPath = path.join(__dirname, 'models', 'printer_model.js');
try {
    const buffer = fs.readFileSync(glbPath);
    const base64 = buffer.toString('base64');
    const dataUri = `data:application/octet-stream;base64,${base64}`;
    const jsContent = `window.printerGLBData = "${dataUri}";\n`;
    fs.writeFileSync(jsPath, jsContent);
    console.log('Successfully converted printer.glb to printer_model.js!');
} catch (e) {
    console.error('Failed:', e.message);
}
