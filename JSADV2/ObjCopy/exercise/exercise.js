const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

//because person 2 and person 1 directs to the same point on the memory. this is because person2 is empty js doesnt need to show another point.
person2.firstName = "Simon";

console.log(person1);
console.log(person2);
