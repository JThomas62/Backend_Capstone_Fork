const express = require("express");
const usersRouter = express.Router();

const { getAllUsers } = require("../db");

usersRouter.get("/", async (req, res, next) => {
  try {
    const allUsers = await getAllUsers();

    res.send({
      allUsers,
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = usersRouter;
