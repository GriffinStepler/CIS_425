// Griffin Stepler, A6, CIS425, 1:30pm
let amount = document.getElementById("amountInput");
let rate = document.getElementById("rateInput");
let years = document.getElementById("yearInput");
let future = document.getElementById("fvalSpan");


function verify(element) {
    console.log("verifying...");
    console.log(`Amount: ${amount.value}`);
    console.log(`Rate: ${rate.value}`);
    console.log(`Years: ${years.value}`);


    if (isNaN(amount.value) || isNaN(rate.value) || isNaN(years.value)) {
        alert("Please only input numbers");
    }

    if (rate.value > 20 || rate.value < 1) {
        alert("Rate must be between 1 and 20");
    }

    if (years.value > 10 || years.value < 0) {
        alert("Years must be between 0 and 10");
    }

    console.log("verified");
    console.log("passing to processLoan();");

    const loanObj = {p:amount.value, r:rate.value, n:years.value, fv:0};

    processLoan(loanObj);
}


function processLoan(loan) {
    console.log("processing...");
    let p = parseFloat(loan.p);
    let r = parseFloat(loan.r / 100);
    let n = parseFloat(loan.n);

    console.log(`p: ${p}`);
    console.log(`r: ${r}`);
    console.log(`n: ${n}`);

    let fv = p * ((((1 + r) ** n) - 1) / r);
    console.log(`FV: ${fv}`);
    fv = fv.toFixed(2);
    loan.fv = fv;

    document.getElementById("fvalSpan").innerHTML = `$${fv}`;
    console.log("Processed. Adding to table...");
    addLoanToTable(loan);
}


function addLoanToTable(loan) {
    let resTable = document.getElementById("resultTable");
    let newRow = document.createElement("tr");
    let newCol1 = document.createElement("td");
    let newCol2 = document.createElement("td");
    let newCol3 = document.createElement("td");
    let newCol4 = document.createElement("td");

    newCol1.textContent = "$" + loan.p;
    newCol2.textContent = loan.r + "%";
    newCol3.textContent = loan.n;
    newCol4.textContent = "$" + loan.fv;

    newRow.appendChild(newCol1);
    newRow.appendChild(newCol2);
    newRow.appendChild(newCol3);
    newRow.appendChild(newCol4);
    resTable.appendChild(newRow);
    resTable.style.visibility = "visible";

    console.log("Added to table.");
}


function wipe() {
    console.log("wiping...");
    amount.value = "";
    rate.value = "";
    years.value = "";
    future.innerHTML = "";
    console.log("Wiped.");
}