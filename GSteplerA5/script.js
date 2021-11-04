// Griffin Stepler, A5, CIS425, 1:30pm

function displayRegistration() {
    let infoText = `<p>${fname.value} ${lname.value} is registered for the following semester/course:</p>`;
    let semText = `<p>${semester.value}:</p>`
    let courseText = `<p>${course.value}</p>`

    const div = document.getElementById("result");

    div.innerHTML = `<span id="info">${infoText}<br>${semText}${courseText}</span>`;

    informationElement = document.getElementById("info").setAttribute("style, color:lightgray;");
}

function register() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var course = document.getElementById("course");
    var semester = document.getElementById("semester");

    displayRegistration();
}
