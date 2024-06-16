function gdc(a, b){
    if(b==0) return a;
    return gdc(b, a%b)
}

const result = gdc(10, 15)
console.log(result);