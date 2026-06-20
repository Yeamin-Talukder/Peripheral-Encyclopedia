const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'data.js');
let content = fs.readFileSync(dataFilePath, 'utf8');

const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)){
    fs.mkdirSync(dataDir);
}

const keyboardRegex = /id:\s*'keyboard',[\s\S]*?contentHTML:\s*`([\s\S]*?)`\s*},/;
const mouseRegex = /id:\s*'mouse',[\s\S]*?contentHTML:\s*`([\s\S]*?)`\s*},/;

const kbMatch = content.match(keyboardRegex);
if (kbMatch) {
    const html = kbMatch[1];
    fs.writeFileSync(path.join(dataDir, 'keyboard.js'), "window.deviceHTML = window.deviceHTML || {};\nwindow.deviceHTML['keyboard'] = `" + html + "`;\n");
    // Remove contentHTML property
    content = content.replace(/contentHTML:\s*`[\s\S]*?`/, '');
}

const mMatch = content.match(mouseRegex);
if (mMatch) {
    const html = mMatch[1];
    fs.writeFileSync(path.join(dataDir, 'mouse.js'), "window.deviceHTML = window.deviceHTML || {};\nwindow.deviceHTML['mouse'] = `" + html + "`;\n");
    content = content.replace(/contentHTML:\s*`[\s\S]*?`/, '');
}

fs.writeFileSync(dataFilePath, content);
console.log("Extraction complete.");
