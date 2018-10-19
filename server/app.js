const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

var {generateMessage} = require('./utils/messages');

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

  socket.emit('newMessage', generateMessage('Admin' , 'Welcome to chat app'));

  socket.broadcast.emit('newMessage', generateMessage('Admin','New User joined'));

  socket.on('disconnect',() => {
    console.log('User Disconnected');
  });

  socket.on('createMessage', (message) => {

    // io.emit('newMessage', {     // will send Message to everyone
    //   from : message.from,
    //   text : message.text,
    //   createdAt : new Date().getTime()
    // });

    socket.broadcast.emit('newMessage', generateMessage(message.from,message.text));  // will send Message to everyone excpet one

  });

  // socket.on('createEmail', (email) => {
  //   console.log('Email Created : ',email);
  // });

});

server.listen(port, () => {
  console.log(`server started on port ${port}`);
});
