// Griffin Stepler, E12, CIS425, 1:30pm

// global variables
let http = require("http");
let mysql = require("mysql");
let output = "";

initializeDB();

// create Node.js server
let httpServer = http.createServer(processServerRequest);
httpServer.listen(8080);


function initializeDB() {
    // connect to database, run a query, terminate connection
    let connectionString = {
        name:"Value", 
        host:"cis425.wpcclasses.com", 
        database:"sakila", 
        user:"cis425Fall2021User", 
        password:"cis425Fall2021"
    }; // connectionString

    console.log(connectionString);

    let con = mysql.createConnection(connectionString);

    console.log(`Conecting to ${connectionString.database} database as ${connectionString.user}`);
    con.connect(
        function(err) {
            if (err) {
                console.log("An error has occured: ");
                throw err;
            }
            else {
                console.log(`Connected to ${connectionString.database} database`);
                let sqlquery = "select first_name, last_name from actor;";
                con.query(sqlquery, processResult);
            } // else
        }); // end of con.connect()
    con.end;
} // initializeDB()


function processServerRequest(request, response) {
    console.log(`Request URL: ${request.url}`);
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(`${output}`);
    response.end;
}


function processResult(err, result) {
    if (err) {
        console.log("An error occured: ");
        throw err;
    }
    else {
        console.log(`Returned ${result.length} rows`);
        result.forEach(printActor);
    }
}


function printActor(record) {
    output = output + `<p>${record.first_name} <strong>${record.last_name}</strong></p>`;
}