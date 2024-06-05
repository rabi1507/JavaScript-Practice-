/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let result ='', orgs=x ;
    if(x<0){
       return false
    }
    while(x!=0)
    {
        let temp = x%10; // 1, 2 , 1
        result += temp; //1, 2, 1
        x = Math.floor(x/10) //12, 1, 0
    }
    
    result = Number(result)
    return  orgs==result;
};

console.log(isPalindrome(10));