
function multiplyByTwo (number) {
  let multipler = 2;
  function inner() {
    let result = number * multipler
    console.log(result);
  }
  inner();
}

multiplyByTwo(4);
  