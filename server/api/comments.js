const express = require("express");
const commentsRouter = express.Router();

const { getAllComments } = require("../db");

commentsRouter.get("/", async (req, res, next) => {
  try {
    const allComments = await getAllComments();

    res.send({
      allComments,
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = commentsRouter;
