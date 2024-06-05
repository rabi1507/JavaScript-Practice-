const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 699 },
    { id: 3, name: 'Tablet', price: 499 },
  ];
  
  const productMap = products.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
  }, {});
  
//   console.log(productMap);
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const count = fruits.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
} ,

 {})
// console.log(count);


const add5 =  number => number + 5; // 15                        // 10
const multiply3 = number => number * 3; // 45                    // 30
const subtract2 =  number => number - 2; // 43 if input is 10,   //  28     input is 5
const composedFunctions = [add5, multiply3, subtract2];
const result = composedFunctions.reduce((acc, curr) => curr(acc), 10);
// console.log(result); 


const numbers = [1, 2, 3, 2, 4, 3, 5, 1, 6];

console.log(numbers.reduce((acc, curr) => { 
    if(!acc.includes(curr)) acc.push(curr)
        return acc;
}, []))
   


