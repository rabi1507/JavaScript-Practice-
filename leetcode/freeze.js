const emp = {
    name: "Mohit",
    add:"karnakata",
    party:"Congress"
}
Object.defineProperty(emp, "party", {
    writable:false
})
// Object.defineProperty(emp, "name", {
//     writable:false
// })
emp.party = "BJP"
emp.name = "Mohit MWB Rock-Star"

// console.log(emp);

const name = emp ? emp.name || emp.name?.name || emp.name?.name1 : undefined
console.log(name);