const mongoose = require("mongoose");
const express = require("express");
const app = express();
require ("dotenv").config();
const PORT = process.env.PORT;
const URL = process.env.DB_URL;

const dbConnection = async (req, res)=>{
    try{
        const connect = await mongoose.connect(URL);
        console.log("Connect to db", "with host: ", connect.connection.host, "and name: ", connect.connection.name);
        app.listen(PORT || 5000, ()=>{
            console.log(`Server is listening on port: http://localhost:${PORT}`)
        })
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = dbConnection;