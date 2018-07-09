/*
* A simple rest application for assignment 1
*
*/

//Dependencies
const http = require('http');
const url = require('url');


//Instantiate a server
var server = http.createServer(function(req,res){


  var parsedUrl = url.parse(req.url,true);
  var path = parsedUrl.pathname;

  var trimmedPathName = path.replace(/^\/+|\/+$/g,'');

  // Check the returned path
  if (trimmedPathName == 'hello'){
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end('{"message":"hello and welcome"}');
  }else{
    res.writeHead(404,{'Content-Type':'application/json'});
    res.end('{"Error":"Not found. You can\'t expect me to serve up everything!"}');
  }
});

// Start the server
server.listen(4000,function(){
  console.log('\x1b[35m%s\x1b[0m',"the server is listining on http://localhost:4000");
});
