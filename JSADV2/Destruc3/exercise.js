function isAdult({age}) {
  return age >= 18;
}


const person2 = {
  id: 2,
  firstName: 'Mert',
  lastName: 'Rossi',
  age: 17
};

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};


console.log(isAdult(person ));

console.log(isAdult(person2 ));
