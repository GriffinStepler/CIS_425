// Griffin Stepler, E10, CIS425, 1:30pm
// array of scores
let scores = [];


function addScore(){
    // event handler 
    let name = document.getElementById("name").value;
    let score1 = document.getElementById("score1").value;
    let score2 = document.getElementById("score2").value;
    let score3 = document.getElementById("score3").value;  

    let newScore = {name:name, num1:score1, num2:score2, num3:score3};
    scores.push(newScore);

    addTableRow(newScore);
}


// add more functions below
function addTableRow(scoreObject) {
    // accept scoreObject, create a new <td> for each attribute, add each <td> to a new <tr>
    // then invoke average calculation and display in the <p id="averageParagraph">

    let existingTable = document.getElementById("outputTable");
    let newRow = document.createElement("tr");
    let newCol1 = document.createElement("td");
    let newCol2 = document.createElement("td");
    let newCol3 = document.createElement("td");
    let newCol4 = document.createElement("td");

    newCol1.textContent = scoreObject.name;
    newCol2.textContent = scoreObject.num1;
    newCol3.textContent = scoreObject.num2;
    newCol4.textContent = scoreObject.num3;

    newRow.appendChild(newCol1);
    newRow.appendChild(newCol2);
    newRow.appendChild(newCol3);
    newRow.appendChild(newCol4);

    existingTable.appendChild(newRow);
    existingTable.style.visiblity = "visible";

    let average = updateAverage();
    let averageParagraph = document.getElementById("averageParagraph");
    averageParagraph.innerHTML = `Overall average is ${average}`;
}


function updateAverage() {
    let total = 0;
    let count = 0;

    for (let i = 0; i < scores.length; i++) {
        total += parseFloat(scores[i].num1);
        total += parseFloat(scores[i].num2);
        total += parseFloat(scores[i].num3);

        count += 3;
    }

    return total / count;
}
