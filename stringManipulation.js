function manipulateString(name, logString) {
    let upperCaseName = name.toUpperCase();
    logString(upperCaseName);
};
function logString(result) {
    console.log(`The manipulate string is: ${result}`);
};

let name = "Hanish Bansal";

manipulateString(name, logString);
