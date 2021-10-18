console.log("this is the october 7th js file");
console.log(`the name is ${name}`);

var number1 = 5;
var number2 = "5";
var result = number1 ** 2;

console.log(`${number1} to the power of two is ${result}`)

// == from java is the === in js
// === is the type and value comparison operator
// !== is the not equal type and value
if (number1 === number2) {
    console.log("they are equal");
}
else {
    console.log("they are not equal");
}

// switch statements function the same way as in java
switch (number1) {
    case 1:
        console.log("case 1");
        break;
    case 2:
        console.log("case 2");
        break;
    case 5:
        console.log("case 5");
        break;
    default:
        console.log("unknown number");
}

// functions
function addNumber(n1, n2) {
    return n1 + n2;
}

var r2 = addNumber(4, 10);
console.log(r2);

// event-handler; function invoked when an event (often mouse click) happens
function printHello() {
    console.log("Hello world!");
    return;
}