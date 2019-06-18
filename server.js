var express = require('express');
var mysql = require('mysql');

var app = express();

app.listen(3308, () => {
    console.log("Node server running http://localhost:3308");
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