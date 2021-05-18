
const setupSocketIO = (io, db) => {

  io.on("connection", async (socket) => {

    const { userId, userType } = socket.handshake.query;
    const { token } = socket.handshake.auth;

    socket.on('disconnect', (reason) => {
      console.log(`disconnected: ${reason}`);
    });

    // * DEVELOPER SOCKET SETUP
    if (userId && token && userType === 'developer') {
      socket.join(`developer_${userId}`);

      // * EMIT MESSAGE HISTORY ON CONNECTION
      const messageHistory = await db.Message.findAll({
        where: { developer_id: userId },
        order: [['timestamp', 'DESC']],
        include: [
          { model: db.Company, as: 'company' },
          { model: db.Developer, as: 'developer' }
        ]
      });
      const chatsHistory = {};
      messageHistory.forEach((msg) => {
        const { id, message, timestamp, developer_id, company_id, is_from_developer, developer, company } = msg.dataValues;

        if (!chatsHistory[company_id]) {
          chatsHistory[company_id] = {
            company,
            developer,
            last_timestamp: timestamp,
            messages: [{id, message, timestamp, company_id, developer_id, is_from_developer}]
          }
        }
        else {
          chatsHistory[company_id].messages.push({id, message, timestamp, company_id, developer_id, is_from_developer});
        }
      });

      socket.emit('message-history', Object.values(chatsHistory));

      // * HANDLE DEVELOPER MESSAGE
      socket.on('client-message', async ({message, targetId}) => {
        const msg = await db.Message.create({
          company_id: targetId,
          developer_id: userId,
          message: message,
          is_from_developer: true,
          timestamp: Date.now()
        });

        const updatedChatMessages = await db.Message.findAll({
          where: { company_id: targetId, developer_id: userId },
          order: [['timestamp', 'DESC']],
          include: [
            { model: db.Company, as: 'company' },
            { model: db.Developer, as: 'developer' }
          ]
        });

        let updatedChat = {};
        updatedChatMessages.forEach((msg) => {
          const { id, message, timestamp, developer_id, company_id, is_from_developer, developer, company } = msg.dataValues;

          if (!updatedChat.last_timestamp) {
            updatedChat = {
              company,
              developer,
              last_timestamp: timestamp,
              messages: [msg]
            }
          }
          else {
            updatedChat.messages.push({id, message, timestamp, company_id, developer_id, is_from_developer});
          }
        });

        io.to(`company_${targetId}`).emit('server-message', updatedChat);
        io.emit('server-message', updatedChat);
      });
    }

    // * COMPANY SOCKET SETUP
    else if (userId && token && userType === 'company') {
      socket.join(`company_${userId}`);

      // * EMIT MESSAGE HISTORY ON CONNECTION
      const messageHistory = await db.Message.findAll({
        where: { company_id: userId },
        order: [['timestamp', 'DESC']],
        include: [
          { model: db.Company, as: 'company' },
          { model: db.Developer, as: 'developer' }
        ]
      });
      const chatsHistory = {};
      messageHistory.forEach((msg) => {
        const { id, message, timestamp, developer_id, company_id, is_from_developer, developer, company } = msg.dataValues;

        if (!chatsHistory[developer_id]) {
          chatsHistory[developer_id] = {
            company,
            developer,
            last_timestamp: timestamp,
            messages: [{id, message, timestamp, company_id, developer_id, is_from_developer}]
          }
        }
        else {
          chatsHistory[developer_id].messages.push({id, message, timestamp, company_id, developer_id, is_from_developer});
        }
      });

      socket.emit('message-history', Object.values(chatsHistory));

      // * HANDLE COMPANY MESSAGE
      socket.on('client-message', async ({message, targetId}) => {
        const msg = await db.Message.create({
          company_id: userId,
          developer_id: targetId,
          message: message,
          is_from_developer: false,
          timestamp: Date.now()
        });

        const updatedChatMessages = await db.Message.findAll({
          where: { company_id: userId, developer_id: targetId },
          order: [['timestamp', 'DESC']],
          include: [
            { model: db.Company, as: 'company' },
            { model: db.Developer, as: 'developer' }
          ]
        });
        let updatedChat = {};
        updatedChatMessages.forEach((msg) => {
          const { id, message, timestamp, developer_id, company_id, is_from_developer, developer, company } = msg.dataValues;

          if (!updatedChat.last_timestamp) {
            updatedChat = {
              company,
              developer,
              last_timestamp: timestamp,
              messages: [msg]
            }
          }
          else {
            updatedChat.messages.push({id, message, timestamp, company_id, developer_id, is_from_developer});
          }
        });

        io.to(`developer_${targetId}`).emit('server-message', updatedChat);
        io.emit('server-message', updatedChat);
      });
    }

    else socket.disconnect();

  });

}

module.exports = setupSocketIO;
