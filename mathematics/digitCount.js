function digitCount(n) {
    let digit = 0;
    if(n < 10) return ++digit
    while(n !=0){
        digit++;
         n = Math.floor(n/10)
        console.log( n);
    }
    return digit
}
console.log(digitCount(521));