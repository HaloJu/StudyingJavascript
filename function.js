// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value
function changeName(obj) {
    obj.name = 'coder';
}
const ellie1 = { name: 'ellie' };
changeName(ellie1);
console.log(ellie1);

