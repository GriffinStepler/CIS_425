// Griffin Stepler, E9, CIS425, 1:30pm

function process() {
    const formElements = document.getElementsByClassName("forms");
    let dataText = "<p>Data entered is<br>";

    for (let i = 0; i < formElements.length; i++) {
        dataText += formElements[i].value + "<br>";
    }
    dataText += "</p>";
    console.log(dataText);

    let emailAddress = `${formElements[0].value}.${formElements[1].value}@asu.edu`;
    let emailText = `<p>Generated Email: ${emailAddress}`;
    console.log(`Email: ${emailText}`);

    let password = "";
    for (let i = 0; i < 10; i++) {
        password += Math.round(Math.random() * 10);
    }
    console.log(`Password: ${password}`)

    let passwordText = `<p>Temporary password is: <span id="pwd">${password}</span></p>`;
    console.log(`Password text: ${passwordText}`);

    const div = document.getElementById("result");
    div.innerHTML = `${dataText}<br>${emailText}<br>${passwordText}`;

    passwordElement = document.getElementById("pwd").setAttribute("style", "font-weight: bold;");
}
