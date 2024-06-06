const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
//   Print the price of each product using forEach
let arr = []
products.forEach((element) => {
    if (typeof element.price == 'number' && !isNaN(element.price)) 
        arr.push(element)
})
// console.log(arr);

// Print the product items as follows using forEach
// products.forEach((element) => {
//     if (typeof element.price == 'number' && !isNaN(element.price)) 
//         // console.log(`${element.product} : ${element.price} `)
// })

// Calculate the sum of all the prices using forEach
let total = 0
products.forEach((element) => {
    if(typeof element.price =='number')
        total += element.price
})
// console.log(total);

//Create an array of prices using map and store it in a variable prices
let res = []
products.map((element) => {
    if (typeof element.price == 'number') res.push(element.price) 
})
// Filter products with prices
let data1 = products.filter((f) => typeof(f.price) === 'number')
// console.log(data1);



// Use method chaining to get the sum of the prices(map, filter, reduce)
const totalPrice =products.
map((element)=> element.price).
filter((element)=> typeof element ==='number').
reduce((acc, curr)=> acc + curr, 0)
// console.log(totalPrice);

//Calculate the sum of all the prices using reduce only
let data2 = products.reduce((acc, curr) => (acc + Number(curr.price)), 0)
// console.log(data2);

// Find the first product which doesn't have a price value
let answ  = products.find((element) => typeof element.price !== 'number')
// console.log(answ.product);

// Find the index of the first product which does not have price value
let index1 = []
let answe  = products.find((element, index) =>{
    let temp = 0
    if(typeof element.price !== 'number') {
       index1.push(index);
    }
    return temp
})

// Check if some products do not have a price value
// method 1
const ans = products.
filter((element) => typeof element.price !== 'number')

// method 2

const isProduct = products.


console.log(ans);

