// Griffin Stepler, Project 2, CIS425, 1:30pm
// this script is to pull the first 10 films from the Sakila database

// global variables
let mysql = require("mysql");  // why does VSC suggest that this is changed into the below line?
// import { createConnection } from "mysql";  // I take it the reason is to reduce import cost?

initializeDB();


function initializeDB() {
    // connect to database, run a query, terminate connection
    let connectionString = {
        host:"cis425.wpcclasses.com", 
        database:"sakila", 
        user:"cis425Fall2021User", 
        password:"cis425Fall2021"
    }; // connectionString

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
                let sqlquery = "SELECT film_id, title, description FROM film LIMIT 10;";
                con.query(sqlquery, processResult);
            } // else
        }); // end of con.connect()
    con.end;
}


function processResult(err, result) {
    if (err) {
        console.log("An error occured: ");
        throw err;
    }
    else {
        console.log(`Returned ${result.length} rows`);
        result.forEach(printFilm);
    }
}


function printFilm(record) {
    console.log(`${record.film_id} | ${record.title} | ${record.description}`);
}