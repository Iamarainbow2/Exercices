const isLogged = true;
const generateRandomNumberPromise = new Promise((resolve, reject) => {
  if (isLogged) {
    const randomNumber = Math.random();
    resolve(randomNumber);
  } else {
    reject(new Error('User is not logged in.'));
  }
});

const processRandomNumber = (randomNumber) => {
  return new Promise((resolve, reject) => {
    if (randomNumber > 0.5) {
      resolve({ name: 'John', age: 24 });
    } else {
      reject(new Error('Random number is not greater than 0.5.'));
    }
  });
};

generateRandomNumberPromise
  .then(processRandomNumber)
  .then((userData) => {
    console.log('Final Result:', userData);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
