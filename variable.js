// 1. USe strict
// added in ES 5
// use this for Vanila Javascript.
'use strict';

//2.Variable
// let(added in ES6)
let globalName = 'global name';
{
    let name = 'hyeju';
    console.log(name);
    name = 'hello'
    console.log(name)
    console.log(globalName)

}
console.log(name)
console.log(globalName)

//var (don't ever use this!)
//because1, var hoisting (move declaration from bottom to top)
//because2, var has no block scope
{
    age = 4;
    var age;
}
console.log(age);

//3. Constants
//favor immutable data type always for a few reason:
//-security
//-thread safety
//-reduce human mistake 
const dayInWeek = 7;
const maxNumber = 5;

//4. Variable types

//primitive, single item: number, string, boolean, null, undefiend, symbol
//object, box container
//function, first-class function

const count = 17; //integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - special numeric values : infinity, -infinity, Nan
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const Nan = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(Nan);

//bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; //over (-2^53 ~ 2^53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;