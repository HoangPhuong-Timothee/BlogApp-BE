const mongoose = require("mongoose");
const express = require("express");
const app = express();
require ("dotenv").config();
const URL = process.env.DB_URL;

const dbConnection = async (req, res)=>{
    try{
        const connect = await mongoose.connect(URL);
        console.log("Connect to db", "with host: ", connect.connection.host, "and name: ", connect.connection.name);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = dbConnection;