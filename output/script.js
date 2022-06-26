// START - LESSON - 03
// function
const multiply = (a, b) => {
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
let a;
let b;
a = "Hello";
b = 4;
// STRING TYPE ARRAY
let stringArray = [];
stringArray.push("Hello");
// MIXED TYPE ARRAY
let mixedArray = [];
// OBJECT TYPE
let c;
c = {
    name: "John",
    age: 30,
};
// END - LESSON - 04
// START - LESSON - 05
let any = [];
let person2 = {
    name: any,
    age: any,
};
// END - LESSON - 05
// START - LESSON - 06
const myFunc = (a, b, c = "Faysal", d) => {
    // console.log(`Hello ${a} ${b} ${c}`);
    return a + b + c + d;
};
myFunc("John", "Doe");
const userDetails = (id, user) => {
    console.log(`User id is ${id}, name is ${user.name}, age is ${user.age}`);
};
// END - LESSON - 07
// START - LESSON - 08
let add;
add = (x, y, z) => {
    return z === "add" ? x + y : x - y;
};
// console.log(add(5,6, "add"));
// END - LESSON - 08
// START - LESSON - 09
// class Player {
//   name: string;
//   age: number;
//   country: string;
//   constructor (n: string, a: number, c: string) {
//     this.name = n;
//     this.age = a;
//     this.country = c;
//   }
//   play() {
//     console.log(`${this.name} from ${this.country} is playing`);
//   }
// }
// const Abu = new Player('Abu', 24, 'Bangladesh');
// const Saleh = new Player('Saleh', 24, 'Bangladesh');
// const faysal = new Player('Faysal', 24, 'Bangladesh');
// const players: Player[] = [];
// players.push(Abu);
// players.push(Saleh);
// console.log(faysal.name);
// END - LESSON - 09
// START - LESSON - 10
// const Abu = new Player("Abu", 24, "Bangladesh");
// const Saleh = new Player("Saleh", 24, "Bangladesh");
// const faysal = new Player("Faysal", 24, "Bangladesh");
// const players: Player[] = [];
// console.log(faysal.age);
// console.log(faysal.country);
// END - LESSON - 10
// START - LESSON - 11
import { Player } from "./classes/Player.js";
const Abu = new Player("Abu", 24, "Bangladesh");
const Saleh = new Player("Saleh", 24, "Bangladesh");
let faysal;
const players = [];
function drawRectangle(options) {
    let width = options.width;
    let length = options.length;
    return width * length;
}
let threeDoptions = {
    width: 10,
    length: 20,
};
// console.log(drawRectangle(threeDoptions));
// END - LESSON - 12
// START - LESSON - 13
// Generics
const addId = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addId({
    name: "Faysal",
    age: 25,
    country: "Bangladesh"
});
// let user = "Faysal";
addId(user);
// interface APIResponse<T> {
//   status: number;
//   type: number;
//   data: T;
// }
// const response: APIResponse<object> = {
//   status: 200,
//   type: 1,
//   data: {
//     name: "Test",
//     someThing: 300
//   }
// }
// END - LESSON - 13
// START - LESSON - 14
// ENUM Types
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["SUCCESS"] = 0] = "SUCCESS";
    ResponseType[ResponseType["FAILURE"] = 1] = "FAILURE";
    ResponseType[ResponseType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    ResponseType[ResponseType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(ResponseType || (ResponseType = {}));
const response = {
    status: 200,
    type: ResponseType.SUCCESS,
    data: {
        name: "Test",
        someThing: 300
    }
};
// console.log(response);
// END - LESSON - 14
