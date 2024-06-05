/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
   
 let result = findRelativeNum(s);

 return result
};

function findRelativeNum(x){

    let charArray = x.split(''), sum =0;
    let symbol =['I','V', 'X', 'L', 'C', 'D', 'M'];
    let value =[1, 5, 10, 50, 100, 500, 1000];

    for (let i = 0; i < charArray.length; i++) {
        
        for (let index = 0; index < symbol.length; index++) {
            if(symbol[index]===x) return sum += value[index]
            
        }
        
    }

  
}

console.log(romanToInt("III"));
