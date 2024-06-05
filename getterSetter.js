class User {
    constructor(name, phone)
    {
        this._name = name,
        this.phone = phone
    }
    get name(){
        return this._name
    }
    set name(value){
        this._name = value
    }
}
let user = new User("rabi", 704)
// console.log(user);
user.name = 'yug'
// console.log(user.name);


// Seting or changing the value of universal constant 
let pi = Math.PI
let preResult = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(pi); // 3.141592653589793
// definedProperty will take three arguments
Object.defineProperty(Math, 'pi', {
    value:50,
    writable:true,
    enumerable:true,
    configurable:true
})
console.log(Object.getOwnPropertyDescriptor(Math, 'pi'));
 pi = 10;
console.log(pi); // 10
//writable, enumerable, configurable

