let http = require('http');
let mysql = require('mysql');
let events = require('events');

let movieCode = "";
let output = "";
let res = "";

let eventEmitter = new events.EventEmitter();
eventEmitter.on("queryFinished", queryHandler);

// create node server
let httpServer = http.createServer(processRequest);
httpServer.listen(8080);


function processRequest(request, response) {
    // create URL for search
    let host = `http://${request.headers["host"]}`;
    let url = new URL(request.url, host);
    movieCode = url.searchParams.get("learnMore");

    res = response;

    if (movieCode == 0) {
        movieCode = Math.floor(Math.random() * 51);
    }

    let sqlQuery = `SELECT film_id, title, description, rental_duration, rental_rate FROM film WHERE film_id=${movieCode};`;

    contactDB(sqlQuery);
}


function contactDB(query) {
    let conString = {
        host:"cis425.wpcclasses.com", 
        database:"sakila", 
        user:"cis425Fall2021User", 
        password:"cis425Fall2021"
    }

    let con = mysql.createConnection(conString);
    console.log('Connecting to database...');
    con.connect( 
        function(err) {
            if (err) {
                console.log("ERROR IN CONNECTING: ");
                throw err;
            } else {
                console.log(`Connected to ${conString.database}. Querying...`);
                con.query(query, processQuery);
            }
            console.log("Query complete. Ending connection...");
            con.end();
            console.log("Connection to database ended.");
    });
}


function processQuery(err, result) {
    if (err) {
        console.log("ERROR IN PROCESSING QUERY");
        throw err;
    } else {
        // console.log(result);
        result.forEach(function (record) {
            output = `<body style="background-color:rgb(80, 79, 79); font-family: 'Courier New', Courier, monospace;"><p style="color:rgb(236, 236, 236); font-weight:bold; font-size: 20pt;">Your Movie: </p>`
            output += `<p style="color:rgb(236, 236, 236);">${record.title} is ${record.description}.</p> <p style="color:rgb(236, 236, 236);">It can be rented for ${record.rental_duration} days for $${record.rental_rate}`;
            output += `</body>`
        });
        // output = `<p>${result[0].title} is ${result[0].description}.</p> <p>It can be rented for ${result[0].rental_duration} days for $${result[0].rental_rate}`;
        eventEmitter.emit("queryFinished");
    }
}


function queryHandler() {
    res.write(output);
    res.end();
}