var socket = io();
socket.on('connect', function (){
  console.log('Connected to server');

  // socket.emit('createMail',{
  // to:'Mahmoud_mostafa002@yahoo.com',
  // text:'From client Body Here'
  //   }   );

  socket.emit('createMess',{
  to:'Andrew@yahoo.com',
  text:'From client Body Here of chat App'
    });
});


socket.on('newMess', function (email){
  console.log('new Message From Server',email);
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

// socket.on('newEmail', function (email){
//   console.log('new Maillllll',email);
// });
