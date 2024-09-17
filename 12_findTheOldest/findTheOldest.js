const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
    {
        name: "rau",
        yearOfBirth: 2012,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
      {
        name: "carlo",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
  ]

const findTheOldest = function(people) {
    const personAges=[]
    
    people.forEach(person => {
        if(person.yearOfDeath){
            personAges.push({...person, age:person.yearOfDeath-person.yearOfBirth})
        }
        else{
            const today=new Date()
            const year=parseFloat(today.getFullYear())
            personAges.push({...person, age:( year- person.yearOfBirth )})
        }
    });
    personAges.sort((person1,person2)=>person2.age-person1.age)
    return personAges[0]
};

// Do not edit below this line
module.exports = findTheOldest;
findTheOldest(people)
