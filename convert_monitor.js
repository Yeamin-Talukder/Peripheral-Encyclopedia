const fs = require('fs');
const path = require('path');

const glbPath = path.join(__dirname, 'models', 'monitor.glb');
const jsPath = path.join(__dirname, 'models', 'monitor_model.js');

try {
    const buffer = fs.readFileSync(glbPath);
    const base64 = buffer.toString('base64');
    const dataUri = `data:application/octet-stream;base64,${base64}`;

    const jsContent = `window.monitorGLBData = "${dataUri}";\n`;
    fs.writeFileSync(jsPath, jsContent);
    console.log('Successfully converted monitor.glb to monitor_model.js!');
} catch (e) {
    console.error('Failed to convert model:', e.message);
}
