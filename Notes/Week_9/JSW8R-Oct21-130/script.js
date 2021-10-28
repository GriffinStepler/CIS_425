
function handleButton( number  ){

    // get a reference to an existing html node (element)
    // we will use the document object model (DOM)
    const displayRef  = document.getElementById("display");

    const displayLabelRef = document.getElementById("displayLabel");

    displayRef.value += number;
  //  displayLabelRef.innerHTML = "23094";
    displayLabelRef.textContent = "23094";

}
