const fibonacci = function(number) {
    let i=1
    const fibonacciSecuence=[0,1]
 while(i<30){
    const suma= fibonacciSecuence[i-1] + fibonacciSecuence[i] 
    fibonacciSecuence.push(suma)
    i++
     }
     if(number<0){return "OOPS"}
     return fibonacciSecuence[number]
};

// Do not edit below this line
module.exports = fibonacci;

fibonacci()
