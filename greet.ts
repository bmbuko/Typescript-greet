import Person from './person';
// function greet(name:string) :string{
// return `Hello, ${name}`
// }
// const message = greet('Andre')
// console.log(message)
// export default function greet(firstName: string, lastName: string) {
//     return `Hello, ${firstName} ${lastName}`;
//   }
export default function greet(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
  }