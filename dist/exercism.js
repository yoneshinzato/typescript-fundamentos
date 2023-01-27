"use strict";
//ex 1
// let pi = '3.14159';
// let pi = 3.14159;
// let tau = pi * 2;
// console.log(`${tau} is ${pi} times two`);
//ex 2
// let pie: string;
// pie = 'blueberry'
// console.log(`I like to eat ${pie}-flavored pie`);
//ex 3
// let isDouglas:boolean = true
// console.log(`${isDouglas ? 'oh, hi Douglas!' : 'Who are you?'}`);
//ex 4
// const integer: number = 6;
// const float: number = 6.66;
// const hex: number = 0xf00d;
// const binary: number = 0b1010011010;
// const octal: number = 0o744;
// const negZero: number = -0;
// const actuallyNumber: number = NaN;
// const largestNumber: number = Number.MAX_VALUE;
// const mostBiglyNumber: number = Infinity;
// const members: number[] = [
//     integer,
//     float,
//     hex,
//     binary,
//     octal,
//     negZero,
//     actuallyNumber,
//     largestNumber,
//     mostBiglyNumber
// ]
// members[0] = 12345;
// console.log(members);
//ex 5
// const sequence: number[] = Array.from(Array(10).keys());
// const animals: string[] = ['pangolin', 'aardvark', 'echidna', 'binturong'];
// const stringsAndNumbers: (string | number)[] = [1, 'one', 2, 'two', 3, 'three'];
// const allMyArrays: (string | number)[][] = [sequence, animals, stringsAndNumbers];
// console.log(allMyArrays);
//day 5 ex 1
// interface CartItem {
//     id: number,
//     title: string,
//     variantId?: number
// }
// function addCartItem(item: CartItem) {
//     console.log(`Adding "${item.title}" to cart.`);
// }
// addCartItem({id: 1, title: 'shoes'})
//day 5 ex 2
// class Person {
//     name: string;
//     age: number;
//         constructor(name: string, age: number) {
//             this.name = name
//             this.age = age
//         }
// }
// class Jane extends Person {
//     constructor(name: string, age: number) {
//         super(name, age)
//     }
// }
// interface Person {
//     name: string
//     age: number
// }
// class Person implements Person {
//     constructor(name: string, age: number){}
// }
// let jane = new Person('Jane', 31);
// console.log(`${jane.name} is ${jane.age} years old`);
//day 5 ex 3
// class MC {
//     greet(event: string = 'party'): string {
//         return `Welcome to the ${event}`
//     }
// }
// const mc = new MC()
// console.log(mc.greet('show'));
//day 5 ex 4
// interface Empregado {
//     title: string
//     salary: number
// }
// class Employee implements Empregado {
//     constructor(public title: string, public salary: number){}
// }
// let emp = new Employee("Software Engineer", 100000)
// console.log(`The new employee's title is ${emp.title} and he earns $ ${emp.salary}`);
// day 5 ex 5 readonly não deixa que a propriedade seja alterada
// interface UserSchema {
//     id: number
//     name: string
// }
// class User implements UserSchema {
//     constructor(readonly id: number, public name: string) {}
// }
// const user = new User(1, 'Dog')
// console.log(user.id);
// user.name = 'Harold'
// user.id = 5
// console.log(`User: `, user);
//day 7 ex 1
// interface User {
//     name: string;
//     age: number;
//     occupation: string;
// }
// interface Admin {
//     name: string;
//     age: number;
//     role: string;
// }
// type Person = User | Admin;
// const persons: Person[] = [
//     {
//         name: 'Max Russel',
//         age: 25,
//         occupation: 'QA Lead'
//     },
//     {
//         name: 'Maria Dev',
//         age: 21,
//         role: 'Technical Lead'
//     },
//     {
//         name: 'Jane Doe',
//         age: 29,
//         occupation: 'Scrum Master'
//     },
//     {
//         name: 'John Downey',
//         age: 44,
//         role: 'CTO'
//     },
// ]
// function logPerson(person: Person) {
//     let additionalInformation: string;
//     if('role' in person) {
//         additionalInformation = person.role
//     } else {
//         additionalInformation = person.occupation
//     }
//     console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
// }
// persons.forEach(logPerson)
// Day 7 - Exercise 2
// class Animal {
//     constructor(public name: string) {}
//     move(meters: number) {
//       console.log(`${this.name} moved ${meters}m.`)
//     }
//   }
//   class Snake extends Animal {
//     move(meters: number = 5) {
//       console.log('Slithering...')
//       super.move(meters)
//     }
//   }
//   class Pony extends Animal {
//     move(meters: number) {
//       console.log('Galloping...')
//       super.move(meters)
//     }
//   }
//   const sammy = new Snake("Sammy the Snake")
//   sammy.move()
//   const pokey = new Pony("Pokey the Pony")
//   pokey.move(34)
// Day 7 - Exercise 3
// class Furniture {
//     constructor(private _manufacturer: string = 'IKEA') {}
//     getManufacturer(): string {
//         return this._manufacturer
//     }
//   }
//   class Desk extends Furniture {
//     kind() {
//       console.log(`This is a desk made by ${this.getManufacturer()}`)
//     }
//   }
//   class Chair extends Furniture {
//     kind() {
//       console.log(`This is a chair made by ${this.getManufacturer()}`)
//     }
//   }
//   const desk = new Desk()
//   desk.kind()
//   desk.getManufacturer // Deve retornar um erro
//   const chair = new Chair()
//   chair.kind()
//   chair.getManufacturer // Deve retornar um erro
// Day 7 - Exercise 4
let multiply;
let capitalize;
capitalize = function (value) {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
};
multiply = function (x, y) {
    return x * y;
};
console.log(capitalize(`nifty ${multiply(5, 10)}`));
