function createUser (name, price) {
 this.name = name; 
 this.price = price;
}

createUser.prototype.writting = function(){
    console.log(`I am writting with ${this.name}`);
}
const pen = new createUser('apsara', 15)

  pen.writting()

console.log(createUser);
 console.log(pencil);

let arr1 = ["js", "py", "cpp"]

let arr2 = ['javascript', 'python', 'c++']

Array.prototype.working = function(){
    console.log(`rabi called it prototype object`);
}


arr1.working();
// console.log(arr1);



const Organization1 = {
    isAvailable : true,
}

const Godown = {
    isSpace : true,
}


const Organization2 = {
    id : 123,
    name : "xyz",
    __proto__: Godown
}

// console.log(Organization2.__proto__);
Organization1.__proto__=Organization2   // Method 1

// console.log(Organization1.__proto__);
const res = Object.setPrototypeOf(Organization1, Organization2)  // new Method 
// console.log(res.__proto__.);
// console.log(Organization2.isSpace);
console.log(Organization2.isAvailable);
// console.log(res.name);


// Creation of method using for string, which will tell me length of object
let str = "azamgarh                            "
String.prototype.newFunction =  function(){
    console.log(` value is : ${this}`); // this mtlb jo call kiya hai vah
    console.log(`accurate length of string is : ${this.trim().length} it removing pre-space and post-space of String`);
}

console.log(str.newFunction());
console.log("     softwaredeveloper".newFunction());
