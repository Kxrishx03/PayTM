const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;







//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("DataBase Connection succesfull");
    app.listen(PORT,()=>{
        console.log("Running on : " + PORT);
    })
})
.catch((e)=>{
    console.log("Error occurred: " + e);
})