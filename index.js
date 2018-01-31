var express = require('express');
var app = express();
var http = require('http').Server(app);
var socket = require('socket.io')(http);
app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req,res){
  res.sendFile(__dirname + 'public/index.html');
});


socket.on('connection', function(sock){
    console.log('A Player Connected...');
    sock.on('join', function(user){
      console.log(user + "  Connected..");
      socket.emit('join', user);
    });
});

http.listen(3000, function(){
  console.log('App running at: http://localhost:3000');
});
