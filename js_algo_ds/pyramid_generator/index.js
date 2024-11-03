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

const character = "#";
const count = 8;
const rows = [];

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

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + 1));
}

let result = "";


for (const row of rows) {
    result = result + "\n" + row;
  }

console.log(result);


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