// console.log("Hello World")

let someMessage = "Hello";

if (someMessage == "Okay") {
    // Truthy condition
    console.log("It's Okay");
}

console.log(someMessage);
let someNumber = "1";

if (someNumber == 1) {
    console.log("It's 1");
}

if (someNumber <= "5") {
    console.log("It's less than 5");
} else {
    console.log("It's greater than 5");
}

// ternary operator
let someCoolMessage = (someMessage === "Okay") 
    ? someMessage.toLocaleUpperCase() 
    : "Not Okay";

if (someMessage === "Hello") {
    //                   Hello        He                 HE
    someCoolMessage = someMessage.substring(0, 2).toLocaleUpperCase();
} else {
    someCoolMessage = "Not Okay";
}

console.log(someCoolMessage);

// Switch operator 

someMessage = "Not Okay";

switch (someMessage) {
    case "Okay":
        console.log("It's Okay");
        break;
    case "Hello":
        console.log("Hello");
        break;
    case "Not Okay":
        console.log("Not Okay");
        break;
    default:
        console.log("Not Found");
}

// Short circuit logic
someMessage = "Hello";
// Evaluate if the value is truthy or falsy. If true returns the 2nd part
// If the first part is false returns the 1st part "", 0, false boolean
let circuitLogicMessage = someMessage && "We Have text";

console.log(circuitLogicMessage);

// It returns the 1st part that is true
// If both false returns the 2nd one
circuitLogicMessage = "" || 0;

console.log(circuitLogicMessage);