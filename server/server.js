const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3007;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMess',{
  from:'Mahmoud mostafa002',
  text:'Hey U can Meet up ....'
  ,arrivedAt:123
    });

// socket.emit('newEmail',{
// from:'Mahmoud_mostafa002@yahoo.com',
// text:'Body Here'
// ,arrivedAt:123
//   });

  socket.on('createMess',function(mail){
    console.log('From Client chat :',mail);
  });

  // socket.on('createMail',function(mail){
  //   console.log('server:',mail);
  // });
  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
