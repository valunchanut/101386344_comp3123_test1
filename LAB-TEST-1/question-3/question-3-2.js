// Question 3: File Module - Part 2 - Create Log files

const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logDir)) {
    console.log('Logs directory already exists. No new files will be created.');
    return;  // terminate the script if logs directory already exists
}

fs.mkdirSync(logDir);
console.log('Logs directory created.');

process.chdir(logDir);

for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    // write some texts
    fs.writeFileSync(fileName, `This is log file #${i}`);
    console.log(`${fileName}`);
}

