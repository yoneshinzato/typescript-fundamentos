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
function add(num1, num2) {
    return num1 + num2;
}
//void - se não retorna nada, armazena um undefined. o resultado da função não está retornando
function result(price) {
    console.log('The result is ' + price);
}
console.log(result(add(6, 3)));
