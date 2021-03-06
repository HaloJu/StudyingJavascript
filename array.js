'use strict';

//Arrayπ

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];


// 2. Index position
const fastfoods = ['π', 'π', 'π­'];
console.log(fastfoods);
console.log(fastfoods.length);
console.log(fastfoods[0]);
console.log(fastfoods[1]);
console.log(fastfoods[2]);
console.log(fastfoods[3]);
console.log(fastfoods[fastfoods.length - 1]);

const fruits = ['π', 'π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);
console.clear();


// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

console.clear();
// c. forEach
fruits.forEach((fruit) => console.log(fruit));

console.clear();

// 4. Addition, deletion, copy
console.log(fruits);

// push : add an item to the end
fruits.push('π', 'π');
console.log(fruits);

// pop: remove an item the end
const poped = fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('π', 'π');
console.log(fruits);

// shift: remove an item to the beginning
fruits.shift();
console.log(fruits);


// note!! shift, unshift are slower than pop, push

console.clear();
// splice: remove an item by index position
fruits.push('π₯', 'π', 'π₯­');
console.log(fruits);
fruits.splice(1, 1)
console.log(fruits);
fruits.splice(1, 1, 'π', 'π₯');
console.log(fruits);

// combine two arrays
const vegetable = ['π', 'π₯'];
const newFresh = fruits.concat(vegetable);
console.log(newFresh);


// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π₯₯'));

// includes
console.log(fruits.includes('π'));
console.log(fruits.includes('π₯₯'));

// lastIndexOf
console.clear();
fruits.push('π');
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.lastIndexOf('π₯₯'));

console.clear();


// my Check
const foods = ['π', 'π', 'π'];
const pushed = foods.push('π§', 'π');
console.log(pushed); // 5
console.log(foods); // (5)Β ["π", "π", "π", "π§", "π"]

const love = ['π§‘', 'π', 'π', 'π'];
const lovepoped = love.pop();
console.log(lovepoped); // π
console.log(love); // (3)Β ["π§‘", "π", "π"]
