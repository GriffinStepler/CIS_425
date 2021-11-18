// Griffin Stepler, CIS425, E11, 1:30pm

let http = require("http");

// creating Node server
let httpServer = http.createServer(processRequest);
httpServer.listen(8080);


function processRequest(request, response) {
    console.log(`Request URL: ${request.url}`);

    host = `http://${request.headers["host"]}`;

    response.writeHead(200, {'Content-Type':'text/html'});
    response.write("<head> <link rel='icon' href='data:;base64,iVBORw0KGgo='> </head>");

    let url = new URL(request.url, host);
    console.log(`full URL: ${url.href}`);
    console.log(`search string: ${url.search}`);

    let name = url.searchParams.get("Name");
    let id = url.searchParams.get("ID");
    
    if (name) {
        response.write(`<p style="font-size:14pt">You entered: ${name} & ${id}</p>`);
        let res = createResponseText(name, id);
        response.write(res);
    }

    response.end();
}


function createResponseText(name, id) {
    let text = `<em><p>Name: <strong>${name}</strong></p></em> <em><p>ID: <strong>${id}</strong></p></em>`;
    return text;
}