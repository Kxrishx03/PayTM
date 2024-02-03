const express = require('express');
const router = express.Router();


router.get('/balance',(req,res)=>{
    res.status(200).json({balance:1000});
});