const express = require('express');
const { requireAuth } = require('../middleware/requireAuth');
const router = express.Router();
const { getAccountBalance ,makeTransaction} = require("../db/controllers/AccountControllers");

//Router to get balance
router.get('/balance',requireAuth,getAccountBalance);

//Router to make transfer
router.post('/transaction',requireAuth,makeTransaction)

module.exports = router;