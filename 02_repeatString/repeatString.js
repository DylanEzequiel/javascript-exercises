const repeatString = function(string,repeat) {
   let i = 0
   let result=""
   if (repeat < 0){
    return "ERROR"
   }
   while(i != repeat){
    result+=string
    i++
   }
   return result
};

// Do not edit below this line
module.exports = repeatString;

const res = repeatString("a",4)

console.log(res)