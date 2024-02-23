const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const connection = require('./db/config');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs');
app.use(express.static(path.join(`${__dirname}/public`)));


app.get('/', (req, res) => {
    res.render("pages/login");
})
app.get('/login', (req, res) => {
    res.render("pages/login");
})
app.get('/newpage', (req, res) => {
    res.render("pages/newpage");
})
app.get('/content', (req, res) => {
    res.render("pages/content");
})
app.get('/register', (req, res) => {
    res.render("pages/register");
})
app.get('/dashboard', (req, res) => {
    res.render("pages/index",{
        status:true,
    });
})
app.post("/login", (req, res) => {
    const { email } = req.body;

    let checkQuery = 'SELECT * FROM users WHERE email= ?';
    connection.query(checkQuery, [email], (err, result) => {
        if (err) {
            res.status(500).send('Error on checking email');
            return;
        }

        if (result.length > 0) {
            res.redirect(200, "/dashboard");
            console.log('Email exists');
        } else {
            console.log('New Email');
            res.render("pages/login");
        }
    });
});




const PORT = 3001;
app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Listening on ${PORT}`);
})