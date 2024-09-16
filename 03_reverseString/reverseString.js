const reverseString = function(texto) {
    const result = texto.split("").reverse().join("")
    return result
};

// Do not edit below this line
module.exports = reverseString;


console.log(reverseString("Saludos Terricola"))