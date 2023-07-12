const findTheOldest = function(people) {
    const date = new Date();
    const ages = people.map(person => {
        if (person.yearOfDeath) {
            person['age'] = person.yearOfDeath - person.yearOfBirth;
        } else {
            person['age'] = date.getFullYear() - person.yearOfBirth;
        }
    })
    people.sort((a, b) => a.age > b.age ? -1 : 1)
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
