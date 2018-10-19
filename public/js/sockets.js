var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  // socket.emit('createEmail', {
  //     to : 'exa@example.com',
  //     text : 'hetyyyyyyy'
  // });
});

socket.on('disconnect', function () {
  console.log('Disconnected');
});

// socket.on('newEmail',function (email) {
//   console.log('New Mail Received',email);
// });

socket.on('newMessage',function (message) {
    console.log('New Message ',message);
});
