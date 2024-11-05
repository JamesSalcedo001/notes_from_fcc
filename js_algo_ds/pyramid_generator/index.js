// let character = "Hello";
// let count = 8;
// let rows = ["Naomi", "Quincy", "CamperChan"];
// console.log(rows[0]);

// arrays are mutable, you can change the value at index directly

// rows[2] = 10;
// console.log(rows);

// mutation = change

// array.length returns number of elems in array. by subtracting 1, you get index of last element in array. 

// rows[rows.length - 1] = 10;

// let cities = ["London", "New York", "Mumbai"];
// cities[cities.length - 1] = "Mexico City";


// console.log(cities);

// method in js is a function that's associated with certain values or objects

// .log() is a method of the console object

// arrays have methods. push method allows pushing a value to the end of the array. 

// rows.push("freeCodeCamp");

// pop method removes last element from array and returns the element

// let popped = rows.pop();
// console.log(popped);

// let pushed = rows.push("freeCodeCamp");
// console.log(pushed);

//  push returns the new length of the array, after adding the new value, not the actual value added

// declaring with let keyword allows it to be reassigned so you can change a value later on. 

// const variables cannot be reassigned like let variable. it also cannot be uninitialized whereas let can. 

// const character = "#";
// const count = 8;
// const rows = [];

// when you have to perform a task repeatedly until a condition is met, you use a loop. for loop:

// for (iterator; condition; iteration) {
// logic;
// }

// the iterator is a variable you can declare specifically in for loop to control how the loop iterates or goes through your logic

// Assign it the value 0 to start. This will give the i variable the value 0 the first time your loop runs.

// for (let i = 0; ) {

// }

// condition of loop tells loop how many times to iterate. when the condition becomes false, the loop stops



// for (let i = 0; i < count; ) {

// }

// iteration statement will tell loop hwat to do with iterator after each run. when you reassign variable, you can use the variable to reference the previous value before reassignment. this allows you to do things like add 3 to existing num. for example bees = bees + 3

// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character.repeat(i + 1));
// }

// let result = "";


// for (const row of rows) {
//     result = result + "\n" + row;
//   }

// console.log(result);


// for..of loop iterates over each item in an iterable ibject and temporarily assigns it to a variable

// for (const value of iterable) {

// }


// all numbers will appear on same line



// i variable represents the current "row" number in your loop, enabling you to use it for crafting pyramid like structure

// repeat method for strings accepts a number as an argument specifiying the number of times to repeat the target string. 

// function name(parameter) {
// }

// function keyword tells JS that name variable is going to be a function. parameter is variable that represents value that is passed into function when used. function may have as many or as few params as one wants.


// all functions return a value, and by default this value is undefined. in order to return something else one must use the return keyword

// when value is explicitly written in code it is called "Hard Coding"

// instead of hard coding, define params for function. params are special variables that are given a value when you call the function and can be used in function to dynamically change result of function's code.

// functions can return hard coded values or values stored in variables. params are special variables for function so they can be returned. 

// function padRow(name) {
//     return name;
// }

// const call = padRow("James");
// console.log(call);

// params need to be given a value when you call the function. when you pass a value to a function call, that value is referred to as an "argument".

// function addTwoNumbers(num1, num2) {
//     return num1 + num2;
// }

// const sum = addTwoNumbers(5, 10);
// console.log(sum);

// global scope: declared outside of any block like a function or for loop are global. 

// local scope/block scope: variable declared inside a function can only be used inside the function. 

// return keyword does not just define a value to be returned from your function, it also stops the execution of your code inside a function or block statement.

// a function can return a value for your application to consume separately. in a function, the return keyword is used to specify a return value.



// function padRow(rowNumber, rowCount) {
//     return character.repeat(rowNumber);
// }

// a function call allows you to actually use a function. methods like .push() are function calls. a function is called by referencing a function's name. 

// for (let i = 0; i < count; i = i + 1) {
//     rows.push(padRow(i + 1, count));
// }


// the values you provide to a function call are referred to as arguments and you pass arguments to a function call. 



const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}



// for (let i = 0; i < count; i = i + 1) {
//     rows.push(padRow(i + 1, count));
// }

// change to use addition assignment operator

// for (let i = 0; i < count; i += 1) {
//     rows.push(padRow(i + 1, count));
// }


// change to use the increment operator for loop iteration

// for (let i = 0; i < count; i++) {
//     rows.push(padRow(i + 1, count));
// }


// change to make it a one-indexed loop and update first argument of padRow to be just i instead of i + 1

// for (let i = 1; i < count; i++) {
//     rows.push(padRow(i, count));
// }


// update so that loop runs when i is 8

// use different kind of loop

// for (let i = 1; i <= count; i++) {
//     rows.push(padRow(i, count));
// }



// while (rows.length < count) {
//     rows.push(padRow(rows.length + 1, count));
// }


// for (let i = count; i > 0; i = i - 1) {
//     rows.push(padRow(i, count));
// }

// different version of iteration using subtraction assignment operator

// for (let i = count; i > 0; i -= 1) {
//     rows.push(padRow(i, count));
// }

// us the decrement operator

// for (let i = count; i > 0; i--) {
//     rows.push(padRow(i, count));
// }


const numbers = [1, 2, 3];

const unshifted = numbers.unshift(5);

console.log(unshifted);

console.log(numbers);

  
let result = ""
  
for (const row of rows) {
    result = result + "\n" + row;
}
  
console.log(result);


// you can pass full expressions as an argument. the function will recieve the result of evaluating that expression.

// the addition assignment operator can be used as shorthand to mean take the original calue of the variable, add this value, and assign the result back to the variable. 

// increment operator increases value of variable by 1, updating the assignment for that variable


// if statements allow you to run a block of code only when a condition is met. 

// if(condition) {
//     logic
// }

// else if statements allow tou to check multiple conditions in a single block of code

// if (condition) {
//     // code to run if cond1 = true
// } else if (condition2) {
//     // code to run if cond2 = true
// } else if (condition3) {
//     // code to run if cond3 = true
// }


// if cond1 is false, js checks the next cond in the chain, if second is false, js checks third cond etc.


// when a variable is declared but never used, it is called an unused declaration, and it is usually best to avoid this


// subtraction assignment operator subtracts the given value from the current variable then assigns the result back to the variable

// unshift method of an array allows you to add a value to the beginning of the array, the opposite of push, which adds the value at the end. unshift returns the new length of the array it was called on


// shift method of array removes first element from array, the opposite of pop, which removes the last element. 