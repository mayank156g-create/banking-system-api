const express = require('express');



const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const accountController = require("../controllers/account.controller");

router.post('/', authMiddleware.authMiddleware, accountController.createAccountController);

const authController = require('../controllers/auth.controllers');

module.exports = router;