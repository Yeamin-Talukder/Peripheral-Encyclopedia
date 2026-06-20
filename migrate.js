const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');

['keyboard', 'mouse'].forEach(device => {
    const jsPath = path.join(dataDir, `${device}.js`);
    const htmlPath = path.join(dataDir, `${device}.html`);
    
    if (fs.existsSync(jsPath)) {
        let content = fs.readFileSync(jsPath, 'utf8');
        
        // Remove `window.deviceHTML = window.deviceHTML || {};`
        content = content.replace(/window\.deviceHTML\s*=\s*window\.deviceHTML\s*\|\|\s*\{\};\n/, '');
        // Remove `window.deviceHTML['device'] = \``
        const regexStart = new RegExp(`window\\.deviceHTML\\['${device}'\\]\\s*=\\s*\``);
        content = content.replace(regexStart, '');
        // Remove trailing \`;
        content = content.replace(/`;\n$/, '');
        
        // If it's mouse, inject canvas container
        if (device === 'mouse') {
            const insertionPoint = `<div class="device-header" style="border-bottom: none; padding-bottom: 0;">\n                        <h1 class="device-title" style="font-size: 4rem; margin-bottom: 1rem;">Mouse</h1>\n                        <span class="device-type" style="font-size: 1.2rem;">Input Device</span>\n                    </div>`;
            const replacement = `${insertionPoint}\n                    <div id="canvas-container" style="width: 100%; height: 50vh; cursor: grab; margin-top: 2rem;"></div>`;
            
            content = content.replace(insertionPoint, replacement);
        }

        fs.writeFileSync(htmlPath, content, 'utf8');
        fs.unlinkSync(jsPath);
    }
});
console.log("Migration complete.");
