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


// Login endpoint
router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Find the user by username
      const user = users.find((user) => user.username === username);
  
      // If the user doesn't exist or the password is incorrect
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Create a JWT token
      const token = jwt.sign({ username }, secretKey);
  
      res.json({ message: 'User logged in', token });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  module.exports = router;
