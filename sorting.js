const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];
const result =function compare(a, b){
    return a-b;
}
console.log(mixedNumericArray.sort(result));


const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];

  // sorted by value
 // items.sort((a,b)=> a.value - b.value)
//   console.log(items);

items.sort((a, b)=> {
    const name1 = a.name.toLocaleLowerCase();
    const name2 = b.name.toLocaleLowerCase();
    if(name1.length>name2.length) return 1;
    if(name1.length<name2.length) return -1;
    if(name1.length==name2.length) return 0;
})

//console.log(items);

items.filter

