// an array to store employees
let employees = [];

function processOneEmployee(employee){
    // create html to create a new table row
    // within the row, create columns for each data point of an employee

    let existingTable = document.getElementById("employeeTable");


    // create a new row element
    // do not close the tag
    let newRow = document.createElement("tr");
    let newCol1 = document.createElement("td");
    let newCol2 = document.createElement("td");

    newCol1.style.width = "70px";
    newCol2.style.fontSize = "20pt";
    newCol1.style.visibility = "hidden";

    newCol1.textContent = employee.employeeName;
    newCol2.textContent = employee.employeeId;

    // nest the data cells within the row
    // places the td cells inside the tr
    newRow.append (newCol1);
    newRow.append(newCol2);

    // the row needs to be nested in the table
    existingTable.append(newRow);


}


function printAll(){

    // <p>EmployeeName : Employee ID</p>
    let printText = "";

    for(let i=0; i < employees.length; i++){

        // using += so that all the paragraphs strings are concatenated
        printText += `<p>${employees[i].employeeName}  : ${employees[i].employeeId}</p>`;

    }

    // let divRef = document.getElementById("output");
    // // inserting the html text we created inside the div
    // divRef.innerHTML = printText;

    /// this equivalent to lines above
    document.getElementById("output").innerHTML = printText;


}


function process(){

    // get a reference to the textboxes
    // you are getting a reference to the textbox object
    // i could get only the value directly
    // because we used value, it stores only a string now
    const nameValue = document.getElementById("name").value;
    const idValue = document.getElementById("id").value;

    // create an object to model an employee
    // we are not storing the structure of this object
    let employee = { employeeName: nameValue , employeeId: idValue };

    console.log(`Employee added: ${employee.employeeName} with id ${employee.employeeId}`);

    // add employee to array
    employees.push(employee);

    // invoke the method to add the employee to the table
    // pass it the employee object we created in this method
    processOneEmployee(employee);

}