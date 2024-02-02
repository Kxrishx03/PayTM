const express = require('express');
const router = express.Router();


//signup
router.post('/signup',(req,res)=>{
      res.status(200).json({msg:"User sign up"});
});


//login
router.post('/login',(req,res)=>{
    res.status(200).json({msg:"User login"})

});



module.exports = router;
