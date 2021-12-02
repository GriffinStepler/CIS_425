// this file includes several broken up examples of various code
// this file will not run; it is instead meant to be read to understand various concepts/provide examples

/////////////////////////////////
// Section 1: Intro to Node.js //
/////////////////////////////////

// Node.js uses asynchronous programming; tasks can be done while others are loading/processing

// below is a simple node server

let http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('Hello world!');
}).listen(8080);

// that example can also be broken up into several different statements

let http = require('http');

let httpServer = http.createServer(processRequest);
httpServer.listen(8080);

function createServer(request, response) {
    // function body
}

// when interacting with the command line to set up a node server, simply navigate 
// to the folder containing the scripts.js file, and execute "node scripts.js"


////////////////////////
// Section 2: Modules //
////////////////////////

// modules are hte same as javascript libraries
// they are included using the require() function

// HTTP Module
// in the context of the above example, you can supply different http functions to the server
response.writeHead(200, {'Content-Type': 'text/html'}); // this gives a status code and an object with headers

// the request argument contains a http.IncomingMessage object
let base = "http://" + request.headers["host"]; // gives the host name (helps form the whole url)

// creating a URL based on the incoming request
let url = new URL(request.url, base); // this now is a whole URL object
url.href // this is the printable version of the URL

// if you are retreiving information from the URL, use the searchParams.get() method:
let name = url.searchParams.get("Name");


/////////////////////////////////////
// Section 3: Node Package Manager //
/////////////////////////////////////

// NPM is the package manager for Node.js modules/packages
// navigate to the desired folder, then execute "npm install <package name>"


//////////////////////
// Section 4: MySQL //
//////////////////////

// you can run MySQL queries through Node.js - access a database and run the query through javascript!
// require the package
let mysql = require('mysql');

// create a connection string (used to log into the database)
let connectionString = {
    host:"cis425.wpcclasses.com",
    database:"sakila",
    user:"cis425Fall2021User",
    password:"cis425Fall2021"
};

// start the connection
let con = mysql.createConnection(connectionString);
con.connect( function (err) {
    if (err) throw err;
    else console.log("Connected to the database");
});

// run the query
let sqlquery = "SELECT first_name, last_name FROM actor LIMIT 10;";
con.query(sqlquery, processResult);

// end the connection
con.end();

// create a function to handle the query return
function processResult(err, result) {
    if (err) throw err;
    else {
        console.log(`returned ${result.length} rows`);
        result.forEach(function (record) {
            console.log(`${record.first_name} ${record.last_name}`);
        })
    }
}