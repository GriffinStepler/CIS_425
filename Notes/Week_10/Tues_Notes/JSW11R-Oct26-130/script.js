function testEval(){

  let calcResult = eval("5+2");
  console.log(`result is ${calcResult}`);

  let myString = " let i=5; if (i ==5 ) { document.write('Whoa!'); }    ";
  // using eval is a security hole becuase it executes code found in strings or other external locations
  // eval(myString);


}


function processForm(){

  const formsRef = document.getElementsByClassName("names");

  let formData = "<p>";

  for(let i=0; i < formsRef.length; i++){

      formData +=  formsRef[i].value + "<br>";

  }

  formData += "</p>";
  console.log(`form data is ${formData}`);

  const divRef = document.getElementById("result");
  divRef.innerHTML = formData;

  // divRef is a reference to the div
  // we are able to modify its html attributes
  divRef.setAttribute("style", "font-size: 30pt;");


}



function testWrite(){

  // Write will rewrite the entire document structure
  // this is why we get a warning in chrome
  document.write("Writing to document...");

}



function changeDOM(){

  const para = document.getElementById("introParagraph");

  // para is reference to html element object
  para.innerHTML = "HTML changed";


}


