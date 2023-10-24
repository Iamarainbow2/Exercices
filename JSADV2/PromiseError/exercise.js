
class UserNotLoggedInError extends Error {
    constructor() {
      super('User is not logged in.');
      this.name = this.constructor.name;
    }
  }
  
  class RandomNumberNotGreaterThanError extends Error {
    constructor() {
      super('Random number is not greater than 0.5.');
      this.name = this.constructor.name;
    }
  }
  
  const isLogged = true;
  
  const generateRandomNumberPromise = new Promise((resolve, reject) => {
    if (isLogged) {
      const randomNumber = Math.random();
      resolve(randomNumber);
    } else {
      reject(new UserNotLoggedInError());
    }
  });
  
  const processRandomNumber = (randomNumber) => {
    return new Promise((resolve, reject) => {
      if (randomNumber > 0.5) {
        resolve({ name: 'John', age: 24 });
      } else {
        reject(new RandomNumberNotGreaterThanError());
      }
    });
  };
  
  generateRandomNumberPromise
    .then(processRandomNumber)
    .then((userData) => {
      console.log('Final Result:', userData);
    })
    .catch((error) => {
      if (error instanceof UserNotLoggedInError || error instanceof RandomNumberNotGreaterThanError) {
        console.error('Error:', error.message);
      } else {
        console.error('An unexpected error occurred:', error.message);
      }
    })
    .finally(() => {
      console.log('Promise has been settled, regardless of success or failure.');
    });
  