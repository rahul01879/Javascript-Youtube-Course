"use strict"; // this use it at the start of code for new Javascript

// Datatype Example

let name = "Rahul" // string
let age = 43 // number
let isLogined = true  //boolean
let state; // undefined

// Datatypes

// number = 2 to power 52
// string = ""
// bigInt
// boolean = true or false
// symbol = it is mostly use in react figma for uniqueness
// null = standalone value
// undefined = when variable value is not defined ex. let state;


// typeOf

console.log(typeof null)  // this is a bug in javascript because null is a primitive value but it return object because of legacy code and for backward compatibility it is not change
console.log(typeof state) // undefined
console.log(typeof name) // string
console.log(typeof age) // number
console.log(typeof isLogined) // boolean

console.log(typeof undefined) // undefined

