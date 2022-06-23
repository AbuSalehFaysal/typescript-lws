// START - LESSON - 03

// function
const multiply = (a: number, b: number) => {
  return a * b;
};
// console.log(multiply(4, 3));

// array
let fruits = ["apple", "banana", "cherry"];
fruits.push("orange");
// console.log(fruits);

// object
let person = {
  name: "John",
  age: 30,
  isCaptain: true,
};
person.age = 40;
// console.log(person);

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
// END - LESSON - 04

// START - LESSON - 05
let any: any[] = [];

let person2 = {
  name: any,
  age: any,
}
// END - LESSON - 05

// START - LESSON - 06
const myFunc = (a: string, b: string, c: string = "Faysal", d?: string) => {
  // console.log(`Hello ${a} ${b} ${c}`);
  return a + b + c + d;
}
myFunc("John", "Doe");
// END - LESSON - 06

// START - LESSON - 07
type stringOrNumber = string | number;
type userType = {name: string, age: number};

const userDetails = (id: stringOrNumber, user: userType) => {
  console.log(`User id is ${id}, name is ${user.name}, age is ${user.age}`); 
}
// END - LESSON - 07

