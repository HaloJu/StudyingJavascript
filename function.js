// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

//사실 Hello 밖에 출력되지 않기 때문에 유용하지 않은 함수
function printHello() {
    console.log('Hello');
}
printHello();

//parameter로 message를 전달하면 전달받은 message를 출력하는 함수
function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);


function changeName(obj) {
    obj.name = 'coder';
}
const ellie1 = { name: 'ellie' };
changeName(ellie1);
console.log(ellie1);


// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie2 = { name: 'ellie' };
changeName(ellie2);
console.log(ellie2);



// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage(`Hi!`);



// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
printAll('dream', 'coding', 'ellie');



// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
}
printMessage();
// console.log(message); //error


// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);


// 7. Early return, early exit 

// bad
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    //long upgrade logic...
}


// [First-class function]
//functions are treated like ant other variable
//can be assigned as a value to variable
//can be passed as an argument to other functions.
//can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defiend. (* hoisted)
// a function expression is created when the execution reaches it.

const print = function () { //anonymous function
    console.log('print');
};
print();

const printAgain = print;
printAgain();

const sumAgain = print;
console.log(sumAgain(1, 3));



// 2. Callback funtion using function expression

function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo;
    }
}

//anontmous function
const printYes = function () {
    console.log('Yes!');
};

//named function
//better debugging in debugger's stack traces
//recursions
const printNo = function print() {
    console.log('no!');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow function 
//always annonymous
// const simplePrint = function () {
//    console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');

// const add = function (a, b) {
//     return (a + b);
// }
const add = (a, b) => a + b;

// IIFE : Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();


// Fun quiz time❤️

// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

// my answer with if
function calculate(command, a, b) {
    if (command === '+') {
        console.log(a + b);
    } else if (command === '-') {
        console.log(a - b);
    } else if (command === '/') {
        console.log(a / b);
    } else if (command === '*') {
        console.log(a * b);
    } else if (command === '%') {
        console.log(a % b);
    } else {
        console.log('please retry!');
    }
}
calculate('-', 3, 2);


// my answer with switch
function Casecalculate(command, a, b) {
    switch (command) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        case '%':
            return a % b;
        default:
            console.log('please retry!')
    }
}
console.log(Casecalculate('+', 2, 3));

//Elley's answer
function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unkonwn command');
    }
}
console.log(calculate('add', 2, 3));
