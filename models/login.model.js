const connection = require("../db/config");

const loginModel = (email, callback) => {
    let checkEmail = 'SELECT COUNT(*) AS EmailCount FROM users WHERE Email = ? ';
    connection.query(checkEmail, [email], (err, result) => {
        if (err) return callback(err);
        if (result[0].EmailCount > 0) {
            return callback(null, { affectedRows: 0, message: true });
        }
        callback(null, { affectedRows: 0, message: false });
    });
};

module.exports = loginModel;
