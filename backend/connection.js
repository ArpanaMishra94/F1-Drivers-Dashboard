const mysql = require('mysql2');
var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'qwerty12',
    database: 'f1Drivers'
});

connection.connect((err) => {
    if(!err) {
        console.log('connected');
    }
    else {
        console.log(err);
    }
})

module.exports = connection;