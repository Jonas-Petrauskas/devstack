module.exports = (sequelize, Datatypes) => {

  const Message = sequelize.define('Message', {
    message: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    timestamp: {
      type: Datatypes.DATE,
      allowNull: false,
      default: Date.now()
    },
    is_from_user: {
      type: Datatypes.BOOLEAN,
      allowNull: false,
    }
  }, {
    tableName: 'messages',
    updatedAt: false,
    createdAt: false
  });

  Message.associate = (model) => {

    Message.belongsTo(model.User, {
      foreignKey: {
        name: 'user_id',
        allowNull: false,
      },
      as: 'user',
      onDelete: 'cascade'
    });

    Message.belongsTo(model.Company, {
      foreignKey: {
        name: 'company_id',
        allowNull: false,
      },
      as: 'company',
      onDelete: 'cascade'
    });

  };

  return Message;
};
