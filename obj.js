let obj = [
    {
    name: "rk", age:26, address:"hubballi"
},
{
    name: "MWB Tech", age:5, address:"New cottion market"
},
{
    name: "Sachin", age:25, address:"Maharastra"
},
{
    name: "Suraj", age:50, address:"Sankari"
}
]
obj.map( input =>{
    if(input.name =="Suraj") return input.age = 22
})

console.log(obj);
// let result = obj.filter(input => input.age > 25).map(input => input.name)