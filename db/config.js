const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "garnier"
})


connection.connect((err) => {
    if (err) {
        console.log('DB not connect' + err.sqlMessage);
    } else {
        console.log('DB connect');
    }

})

module.exports = connection;
