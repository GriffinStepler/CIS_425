// get http library 
let http = require("http");

// create a server object: requires a function to run when a request is received
http.createServer(function (req, res) {
    
    res.write("Hello world"); // respond to client
    res.end(); // end response
}).listen(8080); // server object listens on port 8080