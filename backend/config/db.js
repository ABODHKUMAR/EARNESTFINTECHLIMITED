const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'your_username',
  password: 'Your_password',
  database: 'task_manager_db_name'
});

module.exports = pool;
