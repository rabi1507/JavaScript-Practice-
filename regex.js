//method 1 to declare regular expression
let reg1 = /abc/  
//method 2 to declare regular expression
let reg2 = new RegExp('abc')
// console.log(reg2);


const randomData = "015 354 8787 687351 3512 8735";
const regexpFourDigits = /\b\d{4}\b/g;
let result = randomData.match(regexpFourDigits)
console.log(result[2]);