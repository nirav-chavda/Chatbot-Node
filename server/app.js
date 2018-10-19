const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
var publicPath = path.join(__dirname , "../public");

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('Connected a user');

  // socket.emit('newEmail', {
  //   from : 'nirav@example.com',
  //   text : 'hey! there'
  // });

  socket.emit('newMessage',{
    to : 'rajajaj',
    text : 'ccscsc',
    createdAt : 'csc'
  });

  socket.on('disconnect',() => {
    console.log('User Disconnected');
  });

  socket.on('createMessage', (message) => {
    console.log(`Message Received from ${message.from} with message : ${message.text} @ ${Date()}`);
  });

  // socket.on('createEmail', (email) => {
  //   console.log('Email Created : ',email);
  // });

});

server.listen(port, () => {
  console.log(`server started on port ${port}`);
});
