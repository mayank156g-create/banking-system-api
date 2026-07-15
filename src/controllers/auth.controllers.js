const userModel = require('../models/user.models');
const jwt = require('jsonwebtoken');
const emailService = require('../services/email.services');

async function registerUser(req, res) {
    const { email,name, password } = req.body;
    // Implementation for user registration
    const isExists = await userModel.findOne({
         email :email
        });
    if (isExists) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const user = new userModel({
        email,
        name,
        password
    });
    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '3d' });
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production'
    });
    res.status(201).json({
        user: {
            id: user._id,
            email: user.email,
            name: user.name
        },
        message: 'User created successfully', 
        token });

        await emailService.sendRegistrationEmail(user.email, user.name);
}

async function loginUser(req, res) {
    const { email, password } = req.body;
     const user = await userModel.findOne({ email }).select('+password');
    if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '3d' });
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production'
    });
    res.status(200).json({
        user: {
            id: user._id,
            email: user.email,
            name: user.name
        },
        message: 'Login successful',
        token
    });
}

async function logoutUser(req, res) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(400).json({ message: "No token found" });
    }
    res.clearCookie("token");

    res.status(200).json({
        message: "Logged out successfully"
    });
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser
};