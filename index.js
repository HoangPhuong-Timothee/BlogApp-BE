const bodyParser = require("body-parser");
const cors = require('cors');
const dbConnection = require("./config/dbConnection");
const express = require("express");
const app = express();
const userRoute = require('./routes/user_route');
const authRoute = require('./routes/auth_route');
const postRoute = require('./routes/post_route');
const categoryRoute = require('./routes/category_route');

//DB connection
dbConnection();

//middleware
app.use(bodyParser.json({ limit: "30mb" }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(express());

//routes
app.get('/', (req, res)=>{
    res.send("Server-side");
});
app.use('/api/user', userRoute);
app.use('/api/post', postRoute);
app.use('api/auth', authRoute);
app.use('/api/category', categoryRoute);
