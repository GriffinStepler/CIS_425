// let number = 5;
// console.log(`number is ${number}`);

// this is the node.js javascript file

//import the http module
let http = require("http");

const PORT = 8080;

// create a http server
// that will listen to incoming connections
// CreateServer requires a reference to a callback function
// that will run when an incoming request is received
let httpServer = http.createServer( processServerRequest );


// ask the server to listen for incoming http connections
// create a socket (ip + port)
httpServer.listen( PORT );
console.log(`listening on port ${PORT}`);

function processServerRequest(request, response){
// this method will be invoked when the server gets a request
// two parameters: request from client, response from server

    console.log(`received request`);
    console.log(request.url);
    console.log("processing data...");

    response.writeHead(200, {'Content-type': 'text/html' }   );
    response.write("<head>  <link rel='icon' href='data:;base64,iVBORw0KGgo='></head>");
    response.write("<p>we received your request.</p>");
    response.end();


}
