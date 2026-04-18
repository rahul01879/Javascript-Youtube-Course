let score = 100

let stringScore = String(score) // this is use to convert number to string
let booleanScore = Boolean(score) // this is use to convert number to boolean

console.log(stringScore, typeof stringScore) // 100 string
console.log(booleanScore, typeof booleanScore) // true boolean

let str = "1234"
let numStr = Number(str) // this is use to convert string to number
let boolStr = Boolean(str) // this is use to convert string to boolean  

let isLoggedIn = 0
let boolLoggedIn = Boolean(isLoggedIn) // this is use to convert number to boolean

console.log(numStr, typeof numStr) // 1234 number
console.log(boolStr, typeof boolStr) // true boolean
console.log(boolLoggedIn, typeof boolLoggedIn) // false boolean because 0 is falsy value in javascript