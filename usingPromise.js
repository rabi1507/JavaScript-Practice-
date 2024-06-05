function asyncFunc1() {
    const input = new Promise((resolve, reject) => {
        const result1 = "Result from asyncFunc1 promise 1";
        const error1 = Math.random() < 0.5 ? new Error("Error in asyncFunc1") : null;
        
        if (error1) {
            reject(error1);
        } else {
            resolve(result1);
        }
    });
    return input;
}

function asyncFunc2(data) {
    const input =  new Promise( (resolve, reject) => {
        setTimeout(() => {
            const result2 = "Result from asyncFunc2"+ data;
            // Simulating a potential error
            const error1 = Math.random() < 0.5 ? new Error("Error in asyncFunc1") : null;
            if (error1) {
                reject(error1);
            } else {
                resolve(result2, data);
            }
        }, 1000);
        
    });
    return input
    
}



function asyncFunc3(data) {
    const input = new Promise( (resolve, reject) => {
        setTimeout(() => {
            const result3 = "Result from asyncFunc1" + data;
            // Simulating a potential error
            const error1 = Math.random() < 0.5 ? new Error("Error in asyncFunc1") : null;
            if (error1) {
                reject(error1);
            } else {
                resolve(result3);
            }
        }, 1000);
    });
    return input
}

// console.log(asyncFunc1((asyncFunc2(asyncFunc3()))));

 const promiseResult = async()=>{
 const returnData1 = await asyncFunc1().then(input => ( input)).catch(error => error)
//  console.log(returnData1);
 const returnDat2 = await asyncFunc2(returnData1).then(result => result).catch(error => `error from promise 2 ${error}`)
//  console.log(returnDat2)
 const returnData3 = await asyncFunc3(returnDat2).then(result =>result).catch(error => `error from promise 3 ${error}`)
 //console.log(returnData3); 
 return returnData3
 }
  promiseResult().then(result => console.log(result))

 
 



