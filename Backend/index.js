const express = require('express');
const mongoose = require('mongoose');
const  UserRoutes  = require("./routes/UserRoutes");
require('dotenv').config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT;





//Routes
app.use((req,res,next)=>{
    console.log("CHECK");
    next();
 });

app.use('/api/v1', UserRoutes);


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