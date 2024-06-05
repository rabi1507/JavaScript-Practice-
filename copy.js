let org ={
    name:'rakesh',
    age:22,
    jobTitle:'developer',
    mobile:7047060243,

    move:{
        v:90
    },

    house:{
        location:'azamgarh',
        houseNumber:420
    }
}
let orgShallowCopy = org

//shallow copy create new obj and copies the reference(address) of field not the nested object/array itself
//deep copy create new obj and copiess the entire nested 

// shallow copy method 1
// let shallowCopy = {...org}; 
// shallowCopy.move.v = 98
// shallowCopy.name = "yug"
// console.log(shallowCopy);
// console.log(org);


// const deepCopy = JSON.parse(JSON.stringify(org));
// deepCopy.name="RABI"
// deepCopy.move.v = 12
// console.log(deepCopy);
// console.log(org);


// Deep copy method 2
// let orgDeepCopy1 = Object.assign(org)
// console.log(orgDeepCopy1);

// // Deep copy method 3
// let deepCopy = JSON.parse(JSON.stringify(org)) // output type String
// deepCopy.name = 'pavan'

// // deepCopy.name = 'Rakesh'
// orgDeepCopy.car = 'verna hundai',
// orgDeepCopy1.model = true

