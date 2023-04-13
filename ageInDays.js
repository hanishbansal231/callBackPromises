function ageInDays(person, logResult) {
    let fullName = `${person.firstName} ${person.lastName}`;
    let ageInDays = person.ageInYear * 365;
    let newPerson = [fullName,ageInDays];
    logResult(newPerson);
};
function logResult(result){
    let[name,age] = result;
    console.log(`The Person's full name is ${name}, and their age in  days is ${age}.`);
}

let person = {
    firstName: "Hanish",
    lastName: "Bansal",
    ageInYear: 20
};

ageInDays(person,logResult);