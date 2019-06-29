var express = require('express');
import { MongoClient, ObjectID } from 'mongodb';

var app = express();

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

app.listen(5000, () => {
    console.log("Node server running http://localhost:5000");
});

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password"
});


con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!!!");
    // CONNECT SUCCESSLY
    var sql = "SELECT * FROM tblproduct2.tblproduct";
    con.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
    })
});


app.get('/home.html', (req, res) => {
    var sql = "SELECT * FROM tblproduct2.tblproduct";
    con.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    })
})