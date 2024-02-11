const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'Abodh@2000',
  database: 'task_manager_db'
});

module.exports = pool;
