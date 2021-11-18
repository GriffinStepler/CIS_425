// need a database server
// using a MySQL server - cis425.wpcclasses.com

// SQL statement to retrieve first and last name of actors
// SELECT first_name, last_name FROM actor limit 10; (bad form to limit lol)

// we need to connect to the database to run the query
// need to install MySQL drivers
    // NOTE TO SELF - MYSQL INSTALLED AT REPO LEVEL (CIS425) - otherwise would need to constantly reinstall
    // run in cmd: npm (node package manager) install mysql

// STEP 1: load package/driver
let mysql = require("mysql");

// STEP 2: create a connection string object
let connectionString = {
    host:"cis425.wpcclasses.com", 
    database:"sakila", 
    user:"cis425Fall2021User", 
    password:"cis425Fall2021"
};

// STEP 3: create a connection object
let con = mysql.createConnection(connectionString);

// STEP 4: initiate connection
// function to handle errors - anonymous function (doesn't need a name, passed as an argument)
con.connect(
    function (err) {
        if (err) throw err;
        else console.log(`Connected to ${connectionString.database} Database`);
    }
);

// STEP 5: run query
let sqlQuery = "SELECT first_name, last_name FROM actor limit 10;";
// pass query and reference to a callback function which will process results
con.query(sqlQuery, processResult);

// STEP 6: close connection
con.end();


function processResult(err, result) {
    // processes results, deals with errors and/or the resulting records
    if(err) throw err;
    else {
        // how many rows were returned? 
        console.log(`Returned ${result.length} records`);

        result.forEach(printActorRecord); // invoke function to handle an individual record each loop
    } // else
} // function


function printActorRecord(record) {
    // process one record object, print to console and HTML page
    console.log(`${record.first_name} ${record.last_name}`);
} // function