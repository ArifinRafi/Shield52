
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require('mysql2');

const db = mysql.createPool( {
    host: "localhost",
    user: "root",
    password: "Amarbd55$",
    database: "workers_form"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.post("/create", (req, res) => {
    const WorkersName = req.body.WorkersName;
    const Age = req.body.Age;
    const address = req.body.address;
    const nidNumber = req.body.nidNumber;
    
    console.log("Api has been called")
    console.log(WorkersName);
    console.log(address);
    console.log(nidNumber);
    console.log(Age);
    const sqlInsert = "INSERT INTO workers (WorkersName, Age, address, nidNumber) VALUES (?,?,?,?)";
    db.query(sqlInsert, [WorkersName, Age, address, nidNumber], (error, result) => {
        console.log(result);
     })    
})



// app.get("/", (req, res) => {
//     // const name = "Arifin";
//     // const age = "24";
//     const sqlInsert = "INSERT INTO workers (workersName, Age, address, nidNumber) VALUES ('Md. Ari', 'Bo', '3434343435544', 'gggggffg')";
//     db.query(sqlInsert, (error, result) => {
//         console.log("error", error);
//         console.log("result", error);
//         res.send("f");
//     })
    
// })

// app.get("/", (req, res) => {

//         res.send("f");

    
// })

app.listen(5001, () => {
    console.log("running on 5001");
})