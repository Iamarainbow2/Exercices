const figlet = require('figlet');


const textToArt = 'Hello, Piglet!';


figlet(textToArt, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});