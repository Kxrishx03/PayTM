const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middleware/requireAuth');
const { signupUser, loginUser,getAllusers,updatesDetails,getUser } = require("../db/controllers/UserController");



//get other users
router.get('/allusers',getAllusers);

//get-one-user
router.get('/tousers',getUser);

//signup
router.post('/signup',signupUser);


//login
router.post('/login',requireAuth,loginUser);

router.put('/',requireAuth,updatesDetails);

module.exports = router;
