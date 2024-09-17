const palindromes = function (phrase) {
    const ordenated=phrase.split([""])
    let cleanedPhraseArray=[]
    ordenated.forEach(element => {
        (element == "," | element =="." | element ==" " | element=="!")? null :cleanedPhraseArray.push(element) 
    });

    const normalPhrase=cleanedPhraseArray.join("").toLowerCase()
    cleanedPhraseArray.reverse()
    console.log(cleanedPhraseArray.join("").toLowerCase())
    if(cleanedPhraseArray.join("").toLowerCase() == normalPhrase){return true}
    return false
  
    

    return false
};

// Do not edit below this line
module.exports = palindromes;

console.log(palindromes("racecar!"))