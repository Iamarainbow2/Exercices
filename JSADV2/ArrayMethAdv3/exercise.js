function calculateAverageAge(persons) {
  let avg = 0;
  for (let i = 0; i < persons.length; i++) {
    avg =+ persons[i].age;
  }
  return avg / persons.length;
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const average = calculateAverageAge(persons);
let rounded = Math.round(average)
// console.log(persons);
console.log(average);
console.log(rounded);