// START - LESSON - 03

// function
const multiply = (a: number, b: number) => {
  return a * b;
};
console.log(multiply(4, 3));

// array
let fruits = ["apple", "banana", "cherry"];
fruits.push("orange");
console.log(fruits);

// object
let person = {
  name: "John",
  age: 30,
  isCaptain: true,
};
person.age = 40;
console.log(person);

// END - LESSON - 03

// START - LESSON - 04

let a: string;
let b: number;

a = "Hello";
b = 4;

// STRING TYPE ARRAY
let stringArray: string[] = [];
stringArray.push("Hello");

// MIXED TYPE ARRAY
let mixedArray: (string | number)[] = [];

// OBJECT TYPE
let c: {
  name: string;
  age: number;
};
c = {
  name: "John",
  age: 30,
};
