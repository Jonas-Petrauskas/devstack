const socketio = require('socket.io');

// * TEMP
const messages = ['abc', 'def', 'ghi']
// * TEMP


const setupSocketIO = async (server) => {

  const io = socketio(server);

  io.on('connection', (socket) => {

    socket.on('getMessages', (payload) => {
      console.log(payload);
      socket.join(input, () => {
        console.log('input: ' + input);
      });
      socket.emit("messages ", messages);
    });

    socket.on('addMessage', (message) => {
      messages.push(message);
      socket.join(input, () => {
        console.log('input: ' + input);
      });
      io.emit('messages', messages);
      socket.emit('message ', message)
    });

    io.emit("messages", Object.keys(messages));

    console.log(`Socket ${socket.id} has connected`);
  });

}

const safeJoin = (socket, previousId, currentId) => {
  socket.leave(previousId);
  socket.join(currentId, () => console.log(`Socket ${socket.id} joined room ${currentId}`));
  previousId = currentId;
};

module.exports = setupSocketIO;
