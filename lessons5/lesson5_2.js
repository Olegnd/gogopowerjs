const http = require("http");
var users = [{
    id : 111,
    name : 'Petya',
    email : 'p@i.com',
    comment : 'hi'
},
    {
    id : 112,
    name : 'Fedya',
    email : 'f@i.com',
    comment : 'Hello'

}];

http.createServer(function(request, response) {
    
    response.writeHead(200, {"Content-Type": "application/json"});
    console.log(request.url);
    if (request.url === '/Users') {
        response.write(JSON.stringify(users));
    }
    else {
        request.url === 
    }
    
         
    response.end();
}).listen(8888);
