"use strict";
// console.log('Hi!')
// let a = 11;
// let b ='Joseph';
// function add(n1: number, n2: number) {
//     return n1 + n2;
// }
// console.log(add(4, 5));
// let value; //implícito que é any
// value = 10;
// value = 'Joseph';
// console.log(value);
// as arrays - tipar arrays para não dar falhas
// let values: number[] = [10, 20, 40, 50];
// console.log(values);
//tuples Apple, 3, true, se muda a ordem das coisas, não funciona, nem se acrescentar coisas
// let item: [string, number, boolean] = ['Apple', 3, true];
// console.log(item);
//lista de itens relacionados - enum
// const admin = 1;
// const read = 2;
// const backup = 3;
// enum Role {
//     admin = 1, read = 2, backup = 3
// }
// const user = {
//     firstName: 'Yone',
//     age: 40,
//     role: Role.backup
// }
// console.log(user);
//ts identifica os parametros e consequentemente identifica também o return
// function add(num1: number, num2: number): number {
//     return num1 + num2;
// }
//void - se não retorna nada, armazena um undefined. o resultado da função não está retornando
// function result(price: number) {
//     console.log('The result is ' + price);
// }
// console.log(result(add(6, 3)));
//objetos
// const user =  {
//     firstName: 'Andre',
//     lastName: 'Girotto',
//     age: 33
// }
// user.age = 9;
// console.log(user);
//unknown - pode ser qualquer coisa, mas de forma 'temporária'
// let itemImput: unknown;
// let itemName: string;
// itemImput = 10;
// itemImput = 'rocks';
// if(itemImput === 'string') {
//     itemName = itemImput
// }
//never - não passa informação para a aplicação. never não retorna nada na console. tem algum problema na aplicação
// function generateError(msg: string, code: number): never {
//     throw {
//         msg: msg,
//         errorCode: code
//     }
// }
// generateError('Socorro!', 911);
// console.log(generateError('Socorro!', 911));
//type alias - pseudônimo user usa Users, que são os types que precisamos
//usando types coloca as properties pra ser usadas em outras constantes
// type Users = {
//     firstName: string
//     age: number
// }
// const user: Users =  {
//     firstName: 'Andre',
//     age: 33
// }
// console.log(user);
//union types pode armazenar dois tipos
// function userInput(input1: number | string, input2: number | string) {
//     let result
//     if(typeof input1 === 'number' && typeof input2 === 'number') {
//         result = input1 + input2
//     } else {
//         result = input1.toString() + ' ' +  input2.toString()
//     }
//     return result
// }
// const combinePrices = userInput(10, 20);
// console.log(combinePrices);
// const combineName = userInput('Apple', 'Avaocado');
// console.log(combineName);
//literal type 
// let productPrice: 30 | 20 | 10
// productPrice = 30
// let productName: 'Banana' | 'Apple' | 'Pear'
// productName = 'Pear'
// productName = 'Banana'
//intersection - combinar dois objetos ou duas aliases
// type User = {
//     firstName: string
//     age: number
// }
// type JobRole = {
//     id: number
//     role: string
// }
// type employee = User & JobRole
// const employee1: employee = {
//     firstName: 'John',
//     age: 45,
//     id: 22,
//     role: 'Managing Director'
// }
// console.log(employee1);
// let code: number = 29
// console.log(code);
// code = a;
// function productPrice(price: number, currency: string) {
//     if(price > 20) {
//         return price
//     }
//     return
// }
// classes
// class Users {
//     name: string
//     balance: number = 0
//     singleTransactions: number = 0
//     static totalTransactions: number = 0
//     constructor(n: string, b: number) {
//         this.name = n
//         this.balance = b
//     }
//     addMoney(amount: number) {
//         this.balance += amount
//         this.singleTransactions++
//         Users.totalTransactions++
//     }
// }
//private properties ou methods: não podem ser utilizadas FORA da classe
// const user1 = new Users('Robert', 10);
// user1.balance = 500
// user1.addMoney(100)
// const user2 = new Users('Patrick', 20)
// user2.addMoney(30)
// console.log(user1);
// console.log(user2);
//interfaces
// interface Item {
//     name: string
//     price: number
//     itemPurchased(msg: string): void 
// }
// let product1: Item = {
//     name: 'Apple',
//     price: 2,
//     itemPurchased(msg: string): void {
//         console.log(msg + this.name)
//     }
// }
// product1.itemPurchased('You just bought a ' + name)
//diferença de private e readonly
//readonly acessa a property, mas não pode mudar e dá pra acessar
//quando está private não dá nem pra acessar
// class Movies {
//     readonly id: number
//     name: string
//     constructor(id: number, name: string){
//         this.id = id
//         this.name = name
//     }
// }
// let movie1 = new Movies(1, 'La La Land')
// movie1.id = 5
// console.log(movie1);
// class Movies {
//     constructor(
//         public readonly id: number, 
//         public name: string, 
//         private _price: number){}
// }
// let movie1 = new Movies(1, 'La La Land', 20)
// console.log(movie1);
//index signatures
// class HotelRooms {
//     [roomNumber: string]: string
// }
// let room = new HotelRooms()
// room.A201 = 'Mickey'
// room.A202 = 'Daisy'
// room.A17 = 'Walt Disney'
// console.log(room);
//type inheritance criar classes e utilizar propriedades de uma com a outra
// class Person {
//     constructor(public firstName: string, public lastName: string, public age: number) {}
//     greet() {
//         console.log(`Hi!`);   
//     }
// }
// //cliente do banco
// class Clients extends Person {
//     balance() {
//         console.log("Your  balance is $100");  
//     }
// }
// let client1 = new Clients("Yone", "Shinzato", 33)
// console.log(client1);
// client1.greet()
//overriding
// class Person {
//     constructor(public firstName: string, public lastName: string, public age: number) {}
//     get greet() {
//         return this.firstName + ' ' + this.lastName
//     }
// }
// class Clients extends Person {
//     override get greet() {
//         return 'Dear ' + super.greet
//     }
// }
//funcionário do banco
// class Staff extends Person {
//     override get greet() {
//         return 'Hi,  ' + super.greet
//     }
// }
// let client1 = new Clients('Walt', 'Disney', 66)
// let staff = new Staff('Maria', 'Souza', 33)
// console.log(client1.greet);
// console.log(staff.greet);
