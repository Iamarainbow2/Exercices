const number = 15;

const greaterThanTenPromise = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve('Number is greater than 10.');
  } else {
    reject('Number is not greater than 10.');
  }
});

greaterThanTenPromise
  .then((message) => {
    console.log('Success:', message);
  })
  .catch((message) => {
    console.error('Error:', message);
  });
