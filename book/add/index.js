const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/books/create', (req, res) => {
    res.render('create')
})

app.post('/books/create', (req, res) => {
    const { name, price, status, author } = req.body;
    console.log(req.body);
    const sql = 'INSERT INTO books (name, price, status, author) VALUES ?'
    const value = [
        [name, price, status, author]
    ]
    connect.query(sql, [value], function (err, result) {
        if (err) {
            throw err
        }else {
            res.end('success')
        }
    })

})

app.listen(3000, () => {
    console.log("server is running on port 3000")
})

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'book_manager'
})

connect.connect (function (err) {
    if (err) {
        throw err.stack;
    }else {
        console.log('database is connected')
    }
})
