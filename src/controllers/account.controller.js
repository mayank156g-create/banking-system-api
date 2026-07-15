const accountModel = require('../models/account.model');

async function createAccountController(req, res) {
   
    const user=req.user;

    const account = new accountModel({
        user: user._id,
        status: 'active',
        currency: 'INR',
        balance: 0
    });
    res.status(201).json({ message: 'Account created successfully', account });
}

module.exports = {
    createAccountController
};