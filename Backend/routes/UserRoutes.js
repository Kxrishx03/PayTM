const express = require('express');
const router = express.Router();
const { signupUser, loginUser} = require("../db/controllers/UserController");


//signup
router.post('/signup',signupUser);


//login
router.post('/login',loginUser);



module.exports = router;
