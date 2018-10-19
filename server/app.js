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

  socket.on('disconnect',() => {
    console.log('User Disconnected');
  });

});

server.listen(port, () => {
  console.log(`server started on port ${port}`);
});
