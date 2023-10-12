

function repeatHello (cb) {
    const myInterval = setInterval(cb,1000)
    setTimeout(() => {
        clearInterval(myInterval)
    }, 5000);(() => {
        cb()
    }, 1000);
}

repeatHello(() => {console.log('Hello')});