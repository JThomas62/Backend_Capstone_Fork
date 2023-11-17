// Generate a secret key using crypto and print it. Use this value to set an environment variable.
const crypto = require('crypto');
const generatedSecretKey = crypto.randomBytes(32).toString('hex');
console.log(generatedSecretKey);

// Express app and other dependencies
const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usersRouter = express.Router();

// Configuration values
const saltRounds = 10;
const secretKey = process.env.SECRET_KEY; // Use the key from environment variables

const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUserById,
} = require("../db");

// Function to generate token
function generateToken(user) {
  return jwt.sign({ userId: user.id }, secretKey, { expiresIn: '24h' });
}

// Middleware for token authentication
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

usersRouter.post("/", async (req, res, next) => {
  const { name, email, username, password, status } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const userData = {
      name,
      email,
      username,
      password: hashedPassword,
      status
    };

    const user = await createUser(userData);

    if (user) {
      const token = generateToken(user);
      res.send({ user, token });
    } else {
      next({
        name: "userCreationError",
        message: "Error in creating user. Please try again.",
      });
    }
  } catch (error) {
    next(error);
  }
});

// ... Other routes (GET, PATCH, DELETE) remain the same ...
// Generate a secret key using crypto and print it. Use this value to set an environment variable.
const crypto = require('crypto');
const generatedSecretKey = crypto.randomBytes(32).toString('hex');
console.log(generatedSecretKey);

// Express app and other dependencies
const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usersRouter = express.Router();

// Configuration values
const saltRounds = 10;
const secretKey = process.env.SECRET_KEY; // Use the key from environment variables

const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUserById,
} = require("../db");

// Function to generate token
function generateToken(user) {
  return jwt.sign({ userId: user.id }, secretKey, { expiresIn: '24h' });
}

// Middleware for token authentication
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

usersRouter.post("/", async (req, res, next) => {
  const { name, email, username, password, status } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const userData = {
      name,
      email,
      username,
      password: hashedPassword,
      status
    };

    const user = await createUser(userData);

    if (user) {
      const token = generateToken(user);
      res.send({ user, token });
    } else {
      next({
        name: "userCreationError",
        message: "Error in creating user. Please try again.",
      });
    }
  } catch (error) {
    next(error);
  }
});

// ... Other routes (GET, PATCH, DELETE) remain the same ...

usersRouter.get("/protected-route", authenticateToken, (req, res) => {
  // Only accessible if the user is authenticated
  // Protected route logic
});

module.exports = usersRouter;

usersRouter.get("/protected-route", authenticateToken, (req, res) => {
  // Only accessible if the user is authenticated
  // Protected route logic
});

module.exports = usersRouter;

