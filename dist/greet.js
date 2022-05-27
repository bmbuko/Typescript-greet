"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function greet(name:string) :string{
// return `Hello, ${name}`
// }
// const message = greet('Andre')
// console.log(message)
// export default function greet(firstName: string, lastName: string) {
//     return `Hello, ${firstName} ${lastName}`;
//   }
function greet(person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}
exports.default = greet;
