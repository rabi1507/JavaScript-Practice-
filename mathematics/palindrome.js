function isPalindrome(x){
    const temp = x;
    let char ='';
    for (let index = x.length-1; index >=0; index--) {
        char  = char+x.charAt(index)
    }
    console.log(char);
    return temp === char
}
// console.log(isPalindrome('rabi'));

function isPalindromeNum(){
    
}