function isAuth(user, activate){
    let actions = [ 'activate', 'deactivate']
    let query = {
        isActive:true
    }
   query["name"] = user.name ?  user.name : undefined
   query[user.address] = user.address ?  user.address : undefined
   query[user.pin] = user.pin ?  user.pin : undefined
    return query
}
let user ={
    name:"rabi",
    // address:"bangalore",
    pin:12345
}
const result = isAuth(user)
// console.table( result)









