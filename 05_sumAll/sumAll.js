const sumAll = function(a,b) {
    let sum =0
    if(a<b){
        for(let i=a;i<=b;i++){
            sum+=i
        }
    }
    if(a>b){
        for(let i=b;i<=a;i++){
            sum+=i
        }
    }
    if(a<0 || b<0 || isNaN(a) || isNaN(b)){
        return "ERROR"
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;

console.log(sumAll(1,4))