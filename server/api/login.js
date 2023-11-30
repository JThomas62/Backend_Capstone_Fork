// // Importing necessary libraries
// const express = require("express");
// const loginRouter = express.Router();
// //opted not to implement bcrypt in this version
// // const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const { secretKey } = process.env;
// const { getUserByUsername } = require("../db");

// // Login endpoint
// loginRouter.post("/", async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     if (!username || !password) {
//       next({
//         name: "MissingCredentialsError",
//         message: "Please supply both a username and password",
//       });
//     }
//     // Find the user by username
//     // const user = users.find((user) => user.username === username);
//     const user = await getUserByUsername(username);

//     // If the user doesn't exist or the password is incorrect
//     // if (!user || !(await bcrypt.compare(password, user.password))) {
//     //   return res.status(401).json({ message: "Invalid credentials" });
//     // }

//     // request must have both

//     // Create a JWT token
//     const token = jwt.sign({ username }, secretKey);

//     res.json({ message: "User logged in", token });
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// module.exports = loginRouter;
