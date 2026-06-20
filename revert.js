const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');

['keyboard', 'mouse'].forEach(device => {
    const htmlPath = path.join(dataDir, `${device}.html`);
    const jsPath = path.join(dataDir, `${device}.js`);
    
    if (fs.existsSync(htmlPath)) {
        let content = fs.readFileSync(htmlPath, 'utf8');
        
        // Wrap in JS
        const jsContent = `window.deviceHTML = window.deviceHTML || {};\nwindow.deviceHTML['${device}'] = \`${content}\`;\n`;
        
        fs.writeFileSync(jsPath, jsContent, 'utf8');
        fs.unlinkSync(htmlPath);
    }
});
console.log("Revert complete.");
