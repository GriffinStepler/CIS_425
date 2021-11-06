// Griffin Stepler, Project 1, CIS425, 1:30pm

const display = document.getElementById("display");
let num1 = 0;
let num2 = 0;
let op = "";
let dec = false;


function numberPress(num) {
    // invoked on pressing a number value
    let numeral = num + ""; // prevents issues with numeric vs text types colliding
    console.log(`Invoking numberPress ${num}`);
    if (numeral == "." && dec == true) {
        console.log("oh this guy keeps hitting decimal... NOT ALLOWED!")
        return;
    }
    else if (numeral == ".") {
        console.log("marking a decimal");
        display.value += num;
        dec = true;
        console.log("decimal marked");
    }
    else {
        display.value += num;
    }
    console.log(`Successfully invoked numberPress ${num}`);
}


function operatorPress(operator) {
    // assign num1 to current value of display, set operator, clear display
    console.log(`Invoking operatorPress ${operator}`);

    let temp = display.value + "";

    // if (temp.indexOf(".") != -1) {
    //     console.log("Parsing decimals...");
    //     num1 = temp.slice(0,temp.indexOf(".")) + temp.slice(temp.lastIndexOf("."));
    //     // the above solution slices the string to get the whole number and remainder portion separately, the concatenates them with a decimal
    //     console.log(`Decimal parsed: ${num1}`);
    // }
    // else {
    //     console.log("Parsing whole number...");
    //     num1 = display.value;
    //     console.log(`Number parsed: ${num1}`);
    // }

    num1 = display.value;

    op = operator;
    display.value = "";
    dec = false;
    console.log(`Successfully invoked operatorPress ${operator}`);
}


function ac() {
    // resets the display value and all calculation variables
    console.log("Invoking clear");
    display.value = "";
    num1 = 0;
    num2 = 0;
    op = "";
    dec = false;
    console.log("Successfully invoked clear");
}


function eval() {
    // assign num2, evaluate based on num1 and op values, return to display
    console.log(`Invoking eval ${num1} ${op} ${num2}`);
    num2 = display.value;
    dec = false;

    switch (op) {
        case "*":
            display.value = parseFloat(num1) * parseFloat(num2);
            break;
        case "/":
            if (num2 == 0) {
                display.value = "NaN";
                break;
            }

            display.value = parseFloat(num1) / parseFloat(num2);
            break;
        case "+":
            display.value = parseFloat(num1) + parseFloat(num2);
            break;
        case "-":
            display.value = parseFloat(num1) - parseFloat(num2);
            break;
        default:
            display.value = "ERR";
    }
    
    console.log(`Successfully invoked eval ${num1} ${op} ${num2}`);
}