"use strict"; // this enforces declaration of variables 

const number = 5; // this declares a constant variable

function testValues() {
    // variables don't need to be declared apparently lmao... like they work without declarations (but should be declared)
    // variables declared using var do not follow scope rules 
        // can redeclare var variables
    // variables declared using let do follow scope rules
        // cannot redeclare let variables

    for (var i = 0; i < 5; i++) {
        let count = 0;
        count++;
    }

    debugger; // this invokes the browser's debugger

    console.log(`count is ${count}`);
}

function createArray() {
    // arrays are groups of values
    // java: have data types and defined sizes

    const names = ["James", "Charlie"];
    names[2] = "Timothy";
    names.push("Claire");
    names.pop("James");

    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    names.forEach(functionReference);
}