// Griffin Stepler, A4, CIS425, 1:30pm
"use strict";

function average() {
    let total = 0;
    let count = 0;
    let avg = 0;

    for (let i = 1; i < 11; i++) {
        total += i;
        count++;
    }

    avg = total / count;

    console.log(`Average is ${avg}`);
}


function isEven (number) {
    if (number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}


function testNumber (number) {
    // tests if the number is even, logs result to console
    let result;
    result = isEven(number);
    
    if (result === true) {
        console.log(`${number} is even.`);
    }
    else {
        console.log(`${number} is odd.`);
    }
}


function dayActivity(day) {
    let output;

    switch(day) {
        case "Monday":
            output = "Not again!";
            break;
        case "Wednesday":
            output = "Half way there!";
            break;
        case "Friday":
            output = "TGIF!";
            break;
        case "Sunday":
            output = "Sunday Funday";
            break;
        default:
            output = "Just another day!";
    }

    console.log(output);
}


function printTable() {
    let result = 0;

    for (let i = 1; i < 6; i++) {

        for (let j = 1; j < 6; j++) {
            result = i * j;
            console.log(`${i} * ${j} = ${result}`)
        }

        console.log("\n");
    }
}