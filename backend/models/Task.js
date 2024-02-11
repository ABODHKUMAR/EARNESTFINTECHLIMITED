// Instead of using Mongoose, we'll create a Sequelize model for SQL
const { Sequelize, DataTypes } = require('sequelize');

// Define your Sequelize connection
const sequelize = new Sequelize('task_manager_db_name', 'root_user_name', 'password_your', {
  host: 'localhost',
  dialect: 'mysql' // Change this according to your SQL database
});

// Define your SQL model using Sequelize
const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

// Sync the model with the database
(async () => {
  try {
    await sequelize.sync({ force: true }); // This will drop the table and recreate it, use with caution
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Error syncing the database:', error);
  }
})();

// Export the Task model
module.exports = Task;
