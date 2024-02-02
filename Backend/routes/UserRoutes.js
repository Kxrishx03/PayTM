const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middleware/requireAuth');
const { signupUser, loginUser,getAllusers,updatesDetails } = require("../db/controllers/UserController");



//get other users
router.get('/allusers',requireAuth,getAllusers);

//signup
router.post('/signup',signupUser);


//login
router.post('/login',requireAuth,loginUser);

router.put('/',requireAuth,updatesDetails);

module.exports = router;
