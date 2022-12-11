var express = require('express');
var mysql = require('mysql');
var app = express()
app.use(express.json())

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cs411app',
    database: 'mood'
})

con.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("connected!!!")
    }
})

app.post('/post', (req,res)=> {
    const name = req.query.name;
    const td = req.query.td;
    const color = req.query.color;
    con.query('insert into usertable values(\"' + name + '\",\"' + td + '\",\"' + color + '\")', (err, result) =>{
        if (err) {
            console.log(err)
        } else {
            console.log("inserted successfully")
            res.send("POSTED")
        }
    })
})

app.get('/fetch_color', (req,res)=> {
    con.query('select color from usertable where name=\"' + req.query.name + '\"', function(err,result,fields) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
            ret_val = []
            for (let i = 0; i< result.length; i++){
                ret_val.push(result[i].color)
            }
            console.log(ret_val)
        }
    })
})

app.get('/fetch_td', (req,res)=> {
    con.query('select td from usertable where name=\"' + req.query.name + '\"', function(err,result,fields) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.get('/fetch_most_event', (req,res)=> {
    con.query('SELECT td, COUNT(td) AS `value_occurrence` FROM usertable WHERE name=\"' + req.query.name + '\" GROUP BY td ORDER BY `value_occurrence` DESC LIMIT 1', function(err,result,fields) {
        if (err) {
            console.log(err)
        } else {
            res.send(result[0].td)
            console.log(result[0].td)
        }
    })
})

app.get('/fetch_most_color', (req,res)=> {
    con.query('SELECT color, COUNT(color) AS `value_occurrence` FROM usertable WHERE name=\"' + req.query.name + '\" GROUP BY color ORDER BY `value_occurrence` DESC LIMIT 1', function(err,result,fields) {
        if (err) {
            console.log(err)
        } else {
            res.send(result[0].color)
            console.log(result[0].color)
        }
    })
})

app.delete('/deleteUser', (req, res) => {
    con.query('delete from usertable where name=\"' + req.query.name + '\"', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("deleted")
            console.log(result)
        }
    })
})

app.delete('/deleteTable', (req, res) => {
    con.query('truncate usertable', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("deleted")
            console.log(result)
        }
    })
})

app.listen(8888, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("listening on port 8888...")
    }
})