const db = require('mariadb');

let pool = db.createPool({
    host:'server',
    user: 'user',
    password:'1234',
    connectionLimit: 5,
    database: 'your_db'
});

module.exports = pool;