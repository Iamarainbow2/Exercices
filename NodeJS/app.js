const fs = require('fs');


const filePath = './example.txt';
const fileContent = 'Hello, this is the content of the file!';


fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log(`File "${filePath}" has been written successfully.`);
    }
});