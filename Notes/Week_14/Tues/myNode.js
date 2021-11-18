// let number = 5;
// console.log(`number is ${number}`);

// this port number is for the SERVER
// client port number is automatic/random
const PORT = 8080;

console.log(`Program started....`);


// import the http module/library
// "http" is the object that contains a reference to the http module
let http = require("http");

// need a http server
// which will listen to incoming http requests
// create a server
// createServer needs a reference to a method which will process http requests and send response
// processServerRequest is a "callback function"
let httpServer   =  http.createServer( processServerRequest  );

// start listening for requests
// socket : ip/host + port
httpServer.listen( PORT  );
console.log(`listening on port ${PORT}`);


function processServerRequest( request, response   ){
    // this method will process http requests and send responses
    // it will invoked whenever a request comes in
    // parameters: request coming in, response going out

    console.log(`http request received.`);
    console.log(request.url);

    // create a response to send back to the client
    response.writeHead( 200, {'Content-Type':'text/html'} );

    // ensure that a request for a favicon is not duplicated. Send blank favicon.
    response.write("<head>  <link rel='icon' href='data:;base64,iVBORw0KGgo='></head>");
    response.write("<p>HTTP request received. This is my response.");

    // get the base for the URL
    let base = "http://" + request.headers["host"];


    // let's construct a URL object
    let url = new URL(request.url, base);
    console.log(`full URL is ${url.href}`);

    // get the search string
    let searchString = url.search;
    console.log(`search string is ${searchString}`);

    // extract spefic fields from the search string
    // the value insid the method is the "name" from the form fields
    let name  = url.searchParams.get("Name");

    // <input name="id">
    // then i would use "id"

    // this is the html being sent back to the client("chrome browser")
    response.write(`<p>You entered ${name}</p>`);


    // terminates the http response
    response.end();


}

