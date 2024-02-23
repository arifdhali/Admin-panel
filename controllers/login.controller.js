const loginModel = require("../models/login.model");

let controller = (req, res) => {
    const { email } = req.body;
    console.log(email);
    loginModel(email, (err, result) => {
        if (err) throw err;
        if (result.message) {
            res.redirect("/pages/index");
        } else {
            res.render("pages/login");
        }
    });
};
module.exports = controller;

 