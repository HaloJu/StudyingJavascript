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