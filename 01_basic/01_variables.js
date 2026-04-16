const accountId = 1234323  // Const Variable can't be chnage it always constant if we change it terminal give error
let accountEmail = "rahul001879@gmail.com" // let is use to declare a variable till a function or block of code is end or executed
var accountPassword = "2323423"

// don't use var because of block scope and functional scope it can cause error or change the value

accountCity = "Surat" // sometime we can declare variable without const and let but not prefer
let accountState; // this variable is not define so when we execute code it give undefined

console.log(accountId); // to print accountid
console.table([accountId, accountEmail, accountCity, accountState, accountPassword ]) // this console is use to print multiple variable at one log in table format


accountEmail = "rahul@gmail.com"
accountPassword = "2343434"
accountState = "Gujarat"
accountCity = "Bengluru"

console.table([accountId, accountEmail, accountCity, accountState, accountPassword ])



