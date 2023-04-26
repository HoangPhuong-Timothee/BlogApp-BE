const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const dbConnection = require("./config/dbConnection");
const app = express();
const PORT = process.env.PORT || 5000;
require ("dotenv").config();
const userRoute = require('./routes/user_route');
const postRoute = require('./routes/post_route');
const categoryRoute = require('./routes/category_route');
const authRoute = require('./routes/auth_route');
const multer = require('multer');

//DB connection
dbConnection();

//middleware
app.use(bodyParser.json({ limit: "30mb" }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));

const storage = multer.diskStorage({ destination: (req, file, cb)=>{
    cb(null, "imgage");
    },
    filename: (req, file, cb)=>{
        cb(null, req.body.name);
    }
});
const upload = multer({ storage: storage });
//routes
app.use('/api/upload', upload.single("file"), (req, res)=>{
    res.status(200).json("File has been uploaded!!!");
});
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/post', postRoute);
app.use('/api/category', categoryRoute);

app.listen(PORT, ()=>{
    console.log(`Server is running on port: http://localhost:${PORT}`);
})