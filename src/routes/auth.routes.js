const express = require('express');
const authcontrollers = require('../controllers/auth.controllers');

const router = express.Router();


router.post('/register', authcontrollers.registerUser);

router.post('/login', authcontrollers.loginUser);

router.post('/logout', authcontrollers.logoutUser);



module.exports = router;