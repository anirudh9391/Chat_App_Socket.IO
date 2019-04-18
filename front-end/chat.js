var socket = io.connect('http://localhost:5000')
    // ids
var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output');

// emit events

btn.addEventListener('click', function() {
    socket.emit('chat', {
        message: message.value, // message
        handle: handle.value // message sender
    }); // identifier for the message and then message
});

message.addEventListener('keypress', function() {

    socket.emit('typing', {
        handle: handle.value
    });
});

socket.on('typing', function(data) {
    typing.innerHTML = '<p><em>' + data.handle + ' is typing a message. . .  ' + '</em></p>';
});

socket.on('chat', function(data) {
    typing.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ' :</strong>' + data.message + '</p>';
});