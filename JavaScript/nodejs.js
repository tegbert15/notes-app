//// Load the http module to create an http server.
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var htmlRoot = '/Users/tobinegbert/WebstormProjects/notes-app/';

app.get('/index.html', function(req, res){
    res.sendFile(htmlRoot + 'HTML/index.html');
});
app.get('/', function(req, res) {
    res.sendFile(htmlRoot + 'HTML/index.html');
});
app.get('/Engineering.html', function(req, res) {
    res.sendFile(htmlRoot + 'HTML/Engineering.html');
});
app.get('/English.html', function(req, res) {
    res.sendFile(htmlRoot + 'HTML/English.html');
});
app.get('/Science.html', function(req, res) {
    res.sendFile(htmlRoot + 'HTML/Science.html');
});
app.get('/chat.html', function(req, res) {
    res.sendFile(htmlRoot + 'HTML/chat.html');
});
app.get('/Math.html', function(req, res){
    res.sendFile(htmlRoot + 'HTML/Math.html');
});
app.get('/social_media.html', function(req, res) {
    res.sendFile(htmlRoot + 'HTML/social_media.html');
});
app.get('/JavaScript/*', function(req, res){
    res.sendFile(htmlRoot + req.path);
});
app.get('/CSS/*', function(req, res){
    res.sendFile(htmlRoot + req.path);
});
app.get('/Dependancies/*', function(req,res){
    res.sendFile(htmlRoot + req.path);
});
app.get('/About.html', function(req, res) {
    res.sendFile(htmlRoot + 'HTML/About.html');
});

MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
    if (err) {
        return console.dir(err);
    } else {
        console.log("It worked!")
    }
    db.collection('Notes', function(err, collection) {
        if (err) {
            return console.log("Error ya idiot");
        } else {
            console.log('It worked... Again')
        }
    });
    var collection = db.collection('Notes');
    var doc1 = {'hello':'doc1'};
    var doc2 = {'hello':'doc2'};
    var lotsOfDocs = [{'hello':'doc3', 'hello':'doc4'}];

    collection.insert(doc1, function(err, result) {});
    collection.insert(doc2, function(err, result) {});
    collection.insert(lotsOfDocs, function(err, result) {});
    console.log(collection.find().toArray(function(err, items){
        if(err){
            console.log('Error')
        } else {
            console.log('It worked... Once more')
        }
    }));
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