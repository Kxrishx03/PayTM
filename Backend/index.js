const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const  UserRoutes  = require("./routes/UserRoutes");
const AccountRoutes = require("./routes/AccountRoutes");
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;





//Routes
app.use((req,res,next)=>{
    console.log("CHECK");
    next();
 });

app.use('/api/v1/user', UserRoutes);
app.use('/api/v1/account',AccountRoutes);


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