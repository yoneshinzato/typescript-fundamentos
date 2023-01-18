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
let code = 29;
console.log(code);
