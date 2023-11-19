// Importing necessary libraries
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3006;
const users = [];
// Secret key for JWT
const secretKey = 'your-secret-key';

// Signup endpoint
router.post('/signup', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Check if the username is already taken
      if (users.some((user) => user.username === username)) {
        return res.status(400).json({ message: 'Username is already taken' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const user = { username, password: hashedPassword };
      users.push(user);
  
      // Create a JWT token
      const token = jwt.sign({ username }, secretKey);
  
      res.status(201).json({ message: 'User registered', token });
    } catch (error) {
      console.error('Signup error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  module.exports = router;