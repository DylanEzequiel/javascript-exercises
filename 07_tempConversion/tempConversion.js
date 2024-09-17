const convertToCelsius = function(temperature) {
  const Celcius =  ((temperature - 32) * 5/9).toFixed(1)
  return parseFloat(Celcius)
};

const convertToFahrenheit = function(temperature) {
  const Fahrenheit =  (temperature * 9/5 + 32).toFixed(1)
  return  parseFloat(Fahrenheit)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

console.log(convertToCelsius(23))
console.log(convertToFahrenheit(23))