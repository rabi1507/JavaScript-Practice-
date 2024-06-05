var expect = function(val) {
    return {
        toBe: function(val1) {
            if (val === val1)  return  true;
             else return  "Not Equal";
        },
        notToBe: function(val1) {
            if (val !== val1) 
                return  true;
             else 
              return  "Equal";
            
        }
    };
};
console.log(expect(5).toBe(null))