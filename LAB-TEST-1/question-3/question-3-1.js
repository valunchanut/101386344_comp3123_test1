// Question 3: File Module - Part 1 - Remove Log files

const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logDir)) {
    fs.readdirSync(logDir).forEach(file => {
        console.log(`delete files... ${file}`);
        fs.unlinkSync(path.join(logDir, file));
    });
    fs.rmdirSync(logDir);
    console.log('Logs directory removed.');
} else {
    console.log('Logs directory does not exist.');
}
