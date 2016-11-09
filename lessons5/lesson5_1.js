const http = require("http");
var counter = 0;
http.createServer(function(request, response) {
    counter++;
    console.log(request.url);
    if ( counter > 10 ) {
         response.writeHead(400, {"Content-Type": "text/plain"});
        response.write("ERROR");

    }
    else {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(counter + "");
        
    }     
    response.end();
}).listen(8888);
