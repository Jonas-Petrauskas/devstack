
const setupSocketIO = (io, db) => {

  io.on("connection", async (socket) => {

    const { userId, userType } = socket.handshake.query;
    const { token } = socket.handshake.auth;

    socket.on('disconnect', (reason) => {
      console.log(`disconnected: ${reason}`);
    });

    // * DEVELOPER SOCKET SETUP
    if (userId && token && userType === 'developer') {
      socket.join(`user_${userId}`);

      // * EMIT MESSAGE HISTORY ON CONNECTION
      const messageHistory = await db.Message.findAll({
        where: { user_id: userId }
      });
      socket.emit('message-history', messageHistory);

      // * HANDLE DEVELOPER MESSAGE
      socket.on('client-message', async ({message, targetId}) => {
        const msg = await db.Message.create({
          company_id: targetId,
          user_id: userId,
          message: message,
          is_from_user: true,
          timestamp: Date.now()
        });

        io.to(`company_${targetId}`).emit('server-message', msg);
        io.emit('server-message', msg);
      });
    }

    // * COMPANY SOCKET SETUP
    else if (userId && token && userType === 'company') {
      socket.join(`company_${userId}`);

      // * EMIT MESSAGE HISTORY ON CONNECTION
      const messageHistory = await db.Message.findAll({
        where: { company_id: userId }
      });
      socket.emit('message-history', messageHistory);

      // * HANDLE COMPANY MESSAGE
      socket.on('client-message', async ({message, targetId}) => {
        const msg = await db.Message.create({
          company_id: userId,
          user_id: targetId,
          message: message,
          is_from_user: false,
          timestamp: Date.now()
        });

        io.to(`user_${targetId}`).emit('server-message', msg);
        io.emit('server-message', msg);
      });
    }

    else socket.disconnect();

  });

}

module.exports = setupSocketIO;
