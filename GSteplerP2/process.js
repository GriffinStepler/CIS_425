// global variables
let http = require("http");
let mysql = require("mysql");
let events = require('events');

let output = "";
let movieCode = "";
let eventEmitter = new events.EventEmitter();
eventEmitter.on("codeReceived", contactDB);

// create Node.js server
let httpServer = http.createServer(processServerRequest);
httpServer.listen(8080);


function processServerRequest(request, response) {    
    let host = `http://${request.headers["host"]}`;
    let url = new URL(request.url, host);
    console.log(`Search String: ${url.search}`);

    movieCode = url.searchParams.get("learnMore");
    // eventEmitter.emit("codeReceived");
    // rather than an event handler, change this to a callback and test
    contactDB();

    response.writeHead(200, {'Content-Type':'text/html'});
    response.write("<head> <link rel='icon' href='data:;base64,iVBORw0KGgo'> </head>");
    response.write(output);
    response.end();
}


function contactDB() {
    let conString = {
        host:"cis425.wpcclasses.com", 
        database:"sakila", 
        user:"cis425Fall2021User", 
        password:"cis425Fall2021"
    }

    if (movieCode == 0) {
        movieCode = Math.floor(Math.random() * 51);
    }

    let con = mysql.createConnection(conString);

    console.log(`Connecting to database...`);
    con.connect(
        function(err) {
            if (err) {
                console.log("AN ERROR HAS OCCURRED: ");
                throw err;
            } else {
                console.log(`Connected to ${conString.database} database. Querying...`);
                let sqlQuery = `SELECT film_id, title, description, rental_duration, rental_rate FROM film WHERE film_id=${movieCode};`;
                con.query(sqlQuery, processResult);
            }
            con.end();
            console.log("connection ended.");
        }
    )
    // con.end();
}


function processResult(err, result) {
    if (err) {
        console.log("ERROR IN PROCESSING: ");
        throw err;
    } else {
        console.log(result);
        output = `<p>${result[0].title} is ${result[0].description}!</p> <p>It costs ${result[0].rental_rate} to rent for ${result[0].rental_duration} days.</p>`;
        console.log(output);
    }
}