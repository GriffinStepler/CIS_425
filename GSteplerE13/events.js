// Griffin Stepler, E13, CIS425, 1:30pm

// import packages
let http = require("http");
let mysql = require("mysql");
let events = require("events");
// declare variables
var sqlquery = "";
var output = "";
var res;

// event code
let eventEmitter = new events.EventEmitter();
eventEmitter.on("processingFinished", processingFinishedHandler);

let httpServer = http.createServer(processServerRequest);
httpServer.listen(8080);


function processServerRequest(request, response) {
    // process HTTP requests
    res = response;
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("<head> <link rel='icon' href='data:;base64,iVBORw0KGgo='> </head>");

    sqlquery = "SELECT first_name, last_name FROM customer LIMIT 5;"
    initializeDB();

    res.end();
    
}


function initializeDB() {
    let connectionString = {
        host:"cis425.wpcclasses.com",
        database:"sakila",
        user:"cis425Fall2021User",
        password:"cis425Fall2021"
    }; // connectionString
    console.log(`Connection String: ${connectionString}`);
    let con = mysql.createConnection(connectionString);

    console.log(`Connecting to the database: ${connectionString.database}`);
    con.connect( function(err) {
        if (err) {
            console.log("An error occurred in connecting: ");
            throw err;
        } else {
            con.query(sqlquery, processResult);
            con.end();
        }
    }); // con.connect();
}


function processResult(err, result) {
    console.log("Processing results");
    if (err) {
        console.log("An error occurred in processing: ");
        throw err;
    } else {
        console.log("Printing records");
        result.forEach(printRecord);
        console.log("Emitting...");
        eventEmitter.emit("processingFinished");
    }
}


function printRecord(record) {
    output = output + `<p>${record.first_name} ${record.last_name}</p>`;
    console.log(output);
    console.log("output appended");
    console.log(record);
}


function processingFinishedHandler() {
    console.log("procesing finished handler");
    res.write("<p>test write</p>");
    res.write(`${output}`);
    console.log("response written");
    res.end();
    console.log("response ended");
}