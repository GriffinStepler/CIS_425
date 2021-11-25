// Griffin Stepler, A7, CIS425, 1:30pm

let http = require("http");

// create node server
let httpServer = http.createServer(processRequest);
httpServer.listen(8080);  // not experienced enough to use port 80 :(


function processRequest(request, response) {
    console.log(`Request URL: ${request.url}`);
    let host = `http://${request.headers["host"]}`;  // gotta include the 's' in 'headers'!!!

    response.writeHead(200, {'Content-Type':'text/html'});
    response.write("<head> <link rel='icon' href='data:;base64,iVBORw0KGgo='> </head>");  // I don't even remember what this does lol

    // start searching the URL for information after user submits get form
    let url = new URL(request.url, host);
    console.log(`Search String: ${url.search}`);
    let name = url.searchParams.get("nameInput");
    let position = url.searchParams.get("positionSelect");
    let cis = url.searchParams.get("cisCheck");
    let bda = url.searchParams.get("bdaCheck");
    let email = url.searchParams.get("emailInput");
    let semester = url.searchParams.get("semesterInput");
    let infoRadio = url.searchParams.get("infoRadio");

    // log all the information to the console
    console.log("------------------------");
    console.log(`Name: ${name}`);
    console.log(`Positions: ${position}`);
    console.log(`CIS: ${cis}`);
    console.log(`BDA: ${bda}`);
    console.log(`Email: ${email}`);
    console.log(`Semesters Left: ${semester}`);
    console.log(`Receive more Info: ${infoRadio}`);

    // check to see what values are valid (aka not null) and create text accordingly
    // originally, this was separated and a JSON object was created to supply a function with
    // each value (to allow for scope bound, null values to be passed), but it was easier to 
    // manage the response object by including all functionality here; there was also no reason
    // to remove this functionality given the scope of the assignment/process... would've been cool though
    if (name) {
        response.write(`<p><em>You have a funny name,</em> <strong>${name}</strong></p>`)
    }

    if (position) {
        switch (position) {
            case "0":
                response.write(`<p><em>You're looking for:</em> <strong>Internships</strong></p>`);
                break;
            case "1":
                response.write(`<p><em>You're looking for:</em> <strong>Full-time positions</strong></p>`);
                break;
            case "2":
                response.write(`<p><em>You're looking for:</em> <strong>well... nothing</strong></p>`);
                break;
            default: 
                response.write(`<p>Null value for position selected... how did you do that?</p>`);
        } // switch
    } // if

    if (cis && bda) {
        response.write(`<p><em>A double major! In</em> <strong>CIS & BDA</strong> <em>too, well done!</em></p>`);
    } else if (cis) {
        response.write(`<p><em>A</em> <strong>CIS</strong> <em>major... I knew you were a smart one!</em></p>`);
    } else if (bda) {
        response.write(`<p><em>No shame in being a</em> <strong>BDA</strong> <em>major...</em></p>`);
    } else {
        response.write(`<p><em>Major:</em> <strong>... you gotta tell me your major</strong></p>`);
    }

    if (email) {
        response.write(`<p><em>Cool email:</em> <strong>${email}</strong></p>`);
    }

    if (semester) {
        response.write(`<p><em>Semesters Remaining:</em> <strong>${semester}</strong></p>`);
    }

    if (infoRadio) {
        switch (infoRadio) {
            case "1":
                response.write(`<p><em>You said "</em><strong>Yes</strong><em>" you would like more information</em></p>`);
                break;
            case "0":
                response.write(`<p><em>You said "</em><strong>No</strong><em>" you wouldn't like more information... boring!</em></p>`);
                break;
            default:
                response.write(`<p><em>Would you like more information:</em> <strong>you didn't say</strong></p>`);
        }
    }

    response.end();
}
