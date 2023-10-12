
function repeatHello (cb) {

setInterval(() => {
    cb()    
}, 1000);
}

repeatHello(() => {console.log('Hello')});

/* we can use setTimeout if we want no repetion or we can call interval stop function.
   And we can use the callback function as arrow or normal function.
*/ 