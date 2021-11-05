// Griffin Stepler, Project 1, CIS425, 1:30pm

const display = document.getElementById("display");
let num1 = 0;
let num2 = 0;
let op = "";


function numberPress(num) {
    // invoked on pressing a number value
    console.log(`Invoking numberPress ${num}`);
    display.value += num;
    console.log(`Successfully invoked numberPress ${num}`);
    // TODO: handle multiple decimal inputs; currently fails
}


function operatorPress(operator) {
    // assign num1 to current value of display, set operator, clear display
    console.log(`Invoking operatorPress ${operator}`);
    num1 = display.value;
    op = operator;
    display.value = "";
    console.log(`Successfully invoked operatorPress ${operator}`);
}


function ce() {
    // resets the display value and all calculation variables
    console.log("Invoking clear");
    display.value = "";
    num1 = 0;
    num2 = 0;
    op = "";
    console.log("Successfully invoked clear");
}


function eval() {
    // assign num2, evaluate based on num1 and op values, return to display
    console.log(`Invoking eval ${num1} ${op} ${num2}`);
    num2 = display.value;

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