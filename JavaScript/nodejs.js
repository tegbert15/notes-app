//// Load the http module to create an http server.
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');

var htmlRoot = '/Users/tobinegbert/WebstormProjects/notes-app/HTML/';

app.get('/', function(req, res){
    res.sendFile(htmlRoot + 'index.html');
});

app.get('/Math.html', function(req, res){
    res.sendFile(htmlRoot + 'Math.html');
});

io.on('connection', function(socket){
    console.log("Someone connected");
    socket.on('disconnect', function(){
        console.log("Someone disconnected")
    });
});
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
    });
});
//var http = require('http');
//var express = require('express');
//var app = express.createServer();
//var socket= require('socket.io');
//var io = socket.listen(app);
//// Configure our HTTP server to respond with Hello World to all requests.
//var server = http.createServer(function (request, response) {
//    response.writeHead(200, {"Content-Type": "text/plain"});
//    response.end("Hello World\n");
//});
//server.listen(8000);
//console.log("Server running at http://127.0.0.1:8000/");
//io.sockets.on('connection', function(client) {
//    console.log('Tobin connected');
//    client.emit('messages', { hello: 'world' });
//});
http.listen(8000, function () {
    console.log('listening on 192.168.33.10:8000');
});