import crypto from 'crypto';

export default function randomID(num) {
    const generatedID = crypto.randomBytes(num).toString('hex');
    console.log(generatedID);  
    return generatedID;  
}



