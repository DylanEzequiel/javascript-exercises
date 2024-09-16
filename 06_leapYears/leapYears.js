const leapYears = function(year) {
    //Si es / por 4 y ( si /100 no es 0 ,  pero /400 si es 0 )
 if(year%4 ==0 && (year%100 !=0 || year%400 ==0 )){
    return true
 }
    return false
};

// Do not edit below this line
module.exports = leapYears;

console.log(leapYears(1985))