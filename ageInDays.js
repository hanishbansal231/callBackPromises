function ageInDays(person, logResult) {
    let fullName = `${person.firstName} ${person.lastName}`;
    let ageInDays = person.ageInYear * 365;
    let newPerson = [fullName,ageInDays];
    logResult(newPerson);
};
function logResult(result){
    console.log(`The Person's full name is ${result[0]}, and their age in  days is ${result[1]}`);
}

let person = {
    firstName: "Hanish",
    lastName: "Bansal",
    ageInYear: 20
};

ageInDays(person,logResult);