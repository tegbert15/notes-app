//// Load the http module to create an http server.
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');

var htmlRoot = '/Users/tobinegbert/WebstormProjects/notes-app/HTML/';

app.get('/', function(req, res){
    res.sendFile(htmlRoot + '/index.html');
});

app.get('/Math.html', function(req, res){
    res.sendFile(htmlRoot + 'Math.html');
});

MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
    if (err) {
        return console.dir(err);
    } else {
        console.log("It worked!")
    }
    db.collection('test', function(err, collection) {
        if (err) {
            return console.log("Error ya idiot");
        } else {
            console.log('It worked!... Again')
        }
    });
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

http.listen(8000, function () {
    console.log('listening on 192.168.33.10:8000');
});