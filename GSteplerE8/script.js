// Griffin Stepler, E8, CIS425, 1:30pm 
"use strict";

let scores = [];
let names = ['Mary', 'John', 'Peter', 'Susan'];

initialize(78, 85, 89, 94);


function initialize(n1, n2, n3, n4) {
    // adds 4 parameters to the array
    console.log("Initializing array...");
    scores.push(n1, n2, n3, n4);
}

function printOneElement(element) {
    // print the element sent as a parameter to the console
    console.log(element);
}

function printScores() {
    // print names/scores array to console
    console.log("Printing names...");
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    console.log("Printing scores...");
    scores.forEach(printOneElement);
}

function calculateAverage() {
    // calc average
    let average = 0;
    let total = 0;

    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }

    average = total / scores.length;
    return average; 
}

function printAverage() {
    // log average to console
    console.log(`Average of all scores is ${calculateAverage()}`);
}

function addElements(newNames, newScores) {
    for (let i = 0; i < newNames.length; i++) {
        names.unshift(newNames[i]);
        scores.unshift(newScores[i]);
    }
    
    console.log("Updated List:");
    for (let i = 0; i < names.length; i++) {
        console.log(`${names[i]}: ${scores[i]}`);
    }
}
