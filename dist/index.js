"use strict";
// console.log('Hi!')
let product1 = {
    name: 'Apple',
    price: 2,
    itemPurchased(msg) {
        console.log(msg + this.name);
    }
};
product1.itemPurchased('You just bought a ' + name);
