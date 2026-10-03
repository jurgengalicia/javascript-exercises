function getAge(person, currentDate){
    let personAge = 0
    if(Object.hasOwn(person, "yearOfDeath")){
        personAge = person.yearOfDeath - person.yearOfBirth
    } else {
        personAge = currentDate - person.yearOfBirth
    }
    return personAge
}

const findTheOldest = function(PeopleList) {
    let currentYear = new Date().getFullYear();
    let reducedList = PeopleList.reduce((oldestPerson, person) =>{  
      let oldestAge = getAge(oldestPerson, currentYear);
      let p1Age = getAge(person, currentYear);
      return oldestAge >= p1Age ? oldestPerson : person;
    })
    return reducedList;
};

// Do not edit below this line
module.exports = findTheOldest;
