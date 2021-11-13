// Griffin Stepler, A6, CIS425, 1:30pm
const amountElement = document.getElementById("amountInput");
const rateElement = document.getElementById("rateInput");
const yearsElement = document.getElementById("yearInput");

let amount = document.getElementById("amountInput").value;
let rate = document.getElementById("rateInput").value;
let years = document.getElementById("yearInput").value;


function verify(element) {
    console.log("verifying...");

    // if (isNaN(amount) || isNaN(rate) || isNaN(years)) {
    //     alert("Please only input numbers");
    //     console.log(`Amount: ${amount}`);
    // }

    if (isNaN(amount)) {alert("amount failed");}
    if (isNaN(rate)) {alert("rate failed");}
    if (isNaN(years)) {alert("years failed");}

    if (rate > 20 || rate < 1) {
        alert("Rate must be between 1 and 20");
        console.log(`Rate: ${rate}`);
    }

    if (years > 10 || years < 0) {
        alert("Years must be between 0 and 10");
        console.log(`Years: ${years}`);
    }

    console.log("verified");
    console.log("passing to processLoan();")

    const loanObj = {p:amount, r:rate, n:years};

    processLoan(loanObj);
}


function processLoan(loan) {
    let p = parseFloat(loan.p);
    let r = parseFloat(loan.r / 100);
    let n = parseFloat(loan.n);

    let fv = p * ((((1 + r) ^ n) - 1) / r);

    document.getElementById("fvalSpan").innerHTML = `${fv}`;
}


function addLoanToTable(loan) {

}


function wipe() {
    amountElement.value = "Select an Option";
    rateElement.value = "";
    yearsElement.value = "";
}