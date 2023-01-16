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
