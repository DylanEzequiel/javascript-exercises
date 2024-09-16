//Resolvi con ayuda del manual (ejersicio resuelto). Pude resolver todo (de otra forma) pero no pasaba el test de valores repetidos

const removeFromArray = function(param, ...args) {
    const result=[]
    param.forEach(value => {
        if(!args.includes(value)){
            result.push(value)
        }
    });
    return result
};

// Do not edit below this line
module.exports = removeFromArray;

const array = [1,2,2,3,4,5,6]
console.log(removeFromArray(array,2,3)) 