let character = "Hello";
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]);

// arrays are mutable, you can change the value at index directly

rows[2] = 10;
// console.log(rows);

// mutation = change

// array.length returns number of elems in array. by subtracting 1, you get index of last element in array. 

// rows[rows.length - 1] = 10;

let cities = ["London", "New York", "Mumbai"];
cities[cities.length - 1] = "Mexico City";


console.log(cities);

// method in js is a function that's associated with certain values or objects

// .log() is a method of the console object

// arrays have methods. push method allows pushing a value to the end of the array. 

rows.push("freeCodeCamp");

// pop method removes last element from array and returns the element

let popped = rows.pop();
console.log(popped);

let pushed = rows.push("freeCodeCamp");
console.log(pushed);

//  push returns the new length of the array, after adding the new value, not the actual value added