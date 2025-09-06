const express = require('express');
const router = express.Router();
const User = require('../models/User');
const registerUser = require('../controllers/authController')

router.post('/register', async (req, res) => {
    try {
        registerUser
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Registration failed' });
    }
});

module.exports = router;
