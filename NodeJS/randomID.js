const crypto = require('crypto');

function randomID(num) {
    const generatedID = crypto.randomBytes(num).toString('hex');
    console.log(generatedID);  
    return generatedID;  
}



module.exports = randomID;
