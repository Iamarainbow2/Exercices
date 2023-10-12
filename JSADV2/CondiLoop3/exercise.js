/** could have used a*(a+1)/2 for calculating the sum but i guess you wanted this method */
function sumUntil(maxValue) {
    let sum = 0;
  
    for (let i = 1; i <= maxValue; i++) {
      sum += i;
    }
  
    return sum;
  }

console.log(sumUntil(5));