const crypto = require('crypto');
Object.keys(crypto)
const randomID = crypto.randomBytes(4).toString('hex');
console.log(randomID);
