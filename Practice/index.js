const cars = ["Volvo", "Toyota", "Lexus"];
const stringcars = cars.toString();
const new_cars = new Array("Volvo", "Toyota", "Lexus");
new_cars.sort();
const new_cars_length = new_cars.length;

//array -> join method
// works like toString and converts array to string but also includes a specific seperator between elements

// array -> Shift Method
// removes the first Array Element and shifts all the array elements to a lower index
// it also returns the shifted or removed element

//array -> Unshift
// adds an element to the first position of the array, syntax -> fruits.unshift("Lemon");

//array -> concat
// concatenates two arrays, merges them and returns a new array, it can take any number of arrays as
// arguments

//Splice Method
// to insert elements
// syntax -> arr.splice(2,0,"Lemon","Crab");
// 1st parameter is where we want the elements inserted
// 2nd -> how many elements to be deleted,
// Rest are elements to be inserted

// to remove elements
// fruits.splice(0, 1);
//The first parameter (0) defines the position where new elements should be added (spliced in).
//The second parameter (1) defines how many elements should be removed.

//Slice Method
//The slice() method can take two arguments like slice(1, 3).
//The method then selects elements from the start argument, and up to (but not including) the end argument.
//It returns a new array

//Array.from() -> method that can be used to convert nodeList to Array

// Append elements
// parentNode.appendChild(childNode) - appends childNode as the last child of parentNode.
// parentNode.insertBefore(newNode, referenceNode) - inserts newNode into parentNode before referenceNode.

// Remove elements
// parentNode.removeChild(child) - removes child from parentNode on the DOM and returns a reference to child.
