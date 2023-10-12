
function printAsyncName(callback, name) {
    const helloInterval = setInterval(() => {
        callback();
      clearInterval(helloInterval);
  
      const nameInterval = setInterval(() => {
        console.log(name);
        clearInterval(nameInterval);
      }, 2000);
    }, 1000);
  }
  
  function callbackFunction() {
    console.log('Hello');
  }

  printAsyncName(callbackFunction, "mert");
  
