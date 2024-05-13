var http = require('http');
var fileSys = require('fs');
var url = require('url');
var browserUrl = 'http://it.maranatha.edu/main?userId=256&lang=en';

var server= http.createServer(function(req, res){
   fileSys.readFile('pages/index.html', function(err, data) {
       res.writeHead(200, {'content-type': 'text/html'});
       res.write(data);
       return res.end();
   })
});
server.listen(8000);