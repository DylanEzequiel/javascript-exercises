const add = function(num1,num2) {
	return num1+num2
};

const subtract = function(num1,num2) {
	return num1-num2
};

const sum = function(arrayValues) {
  let res =0
	 arrayValues.forEach(element => {
    res+=element
   });
   return res
};

const multiply = function(arrayValues) {
  let res =1
  arrayValues.forEach(value=>
    res=res*value
  )
  return res
};

const power = function(num1,num2) {
	return num1 ** num2
};

const factorial = function(num1) {
	let res = 1
  for(let i=1;i<=num1;i++){
    res = res*i
  }
  return res
};
console.log(factorial(10))
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
