function palindrome(num) {
    if (num < 10) return true;
    let temp2 = num
    let newNum = '';
    while (num !== 0) {
        let temp = num % 10
        newNum += temp;
        num = Math.floor(num / 10)
    }
    return newNum == temp2
}

// console.log(palindrome(11));

function factorial(n){
    if( n <=2 ) return n
    return n* factorial(n-1)
}
// console.log(factorial(5));

function isPrime(num){
    if(num === 2 || num === 3) return true
    for(let i = 2; i<= Math.floor(num/2); i++){
        if(num % i === 0) return false
    }
    return true
}
// console.log(isPrime(111));

function countTrailingZero(num){
    let product = factorial(num);
    let count = 0;
    while(product != 0){
        let temp = product % 10;
        if(temp === 0) count++
            product = Math.floor(product / 10)
    }
    return count
}
// console.log(countTrailingZero(100));

function primeFactor(num){
    let result = [];
    // if(!prime) return -1
    for(let i = 2; i<= Math.floor(num/2); i++){
        if(num%i ===0 && isPrime(i)) result.push(i)
    }
    return result
}
// console.log(primeFactor(1092));


function allDivisors(num){
    let result = [];
    for(let i = 1; i<= num; i++){
        if(num%i ===0) result.push(i)
    }
    return result
}
console.log(allDivisors(10));