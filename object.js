'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Litterals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}
const halo = { name: 'juya', age: 6 };
print(halo);

// with JavaScript magic (dynamically typed language)
// can add properties later
halo.hasJob = true;
console.log(halo.hasJob);

// can delete properties later
delete halo.hasJob;
console.log(halo.hasJob);



// 2. Computed properties
// key should be always string
console.log(halo.name);
console.log(halo['name']);
halo['hasJob'] = true;
console.log(halo.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(halo, 'name');
printValue(halo, 'age');



// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };



// 4. Constructor Function

// const person4 = makePerson('halo', 6);
// console.log(person4);
// function makePerson(name, age) {
//     return {
//         name,
//         age,
//     };
// }

// =>
const person4 = new Person('halo', 6);
function Person(name, age) {
    //this = {};
    this.name = name;
    this.age = age;
    //return this;
}
console.log(person4);



// 5 in operator: property exostence check (key in obj)
console.log('name' in halo); //true
console.log('age' in halo); //true
console.log('random' in halo); //false
console.log(halo.random);


console.clear();

// 6. for..in vs for..of

// for (key in obj)
for (let key in halo) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 5];
for (let value of array) {
    console.log(value);
}



// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'halo', age: '6' };
const user2 = user;
//user2.name = 'coder';
console.log(user);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);


// cf) old way
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);