function setName (name){
this.name = name
}
function fullName(name, email, address){
    setName.call(this, name),  // without .call it is calling setName but after completion of excution contex it removing everything 
                            // because of there is no any reference which is holding is reference, 
                            // To hold that reference we are using call and sending our reference to hold it
    this.email = email,
    this.address = address
}
console.log(new fullName("rk_dev", "rk@gmail.com", "hubballi"));

var time = new Date().toLocaleString('IST', { hour: 'numeric', minute: 'numeric', hour12: true });
console.log(time)

function recursion(n){
    if(n<0) return 0
    if(n<2) return n
    console.log(` (n-1) will be ${n-1}  (n-2) will be ${n-2}`);
   return recursion(n-1) + recursion(n-2)
}
console.log(recursion(4));