let promise = new Promise((resolve, reject) => {
    // console.log('started ')
    let x = 10;
    console.log(x);
    setTimeout(()=>{
        resolve(( x*x))
    }, 0);
    
}).then((data)=> console.log(data)).catch((err)=>console.log(err))

// let result1 = promise.then(( data => {
//     return new Promise((resolve, reject)=>{
//         console.log(data);

//         setTimeout(() => {
//             resolve(data * data)
//         }, 1000);
//     })
// }))
promise.then((data1 => {
    return new Promise((resolve, reject) => {
        resolve(console.log(data1))
    })
}))

const dummyData = async(x , y)=> {
    return  x + y;
}
 dummyData(12,10).then(r=> console.log(r))

// console.log("parsing ",parseInt(0.000005));