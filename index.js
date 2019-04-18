var express = require('express')
var socket = require('socket.io')

var app = express()

call = function() {
    console.log('Listening at port 5000')
}
var api = app.listen(5000, call)

app.use(express.static('front-end'))



var io = socket(api) // For the running api, io is a reference to the socket around API
io.on('connection', function(socket) {
    console.log('Connection is made')

    // listen for message sent from client

    socket.on('chat', function(data) {
        io.sockets.emit('chat', data)
    })

    socket.on('typing', function(user) {
        socket.broadcast.emit('typing', user)
    });
});