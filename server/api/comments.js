const express = require("express");
const commentsRouter = express.Router();

const {
  createComment,
  getAllComments,
  getCommentById,
  updateComment,
  deleteCommentById,
} = require("../db");

commentsRouter.post("/", async (req, res, next) => {
  const { user_id, book_id, content, rating } = req.body;

  const commentData = {};

  try {
    commentData.user_id = user_id;
    commentData.book_id = book_id;
    commentData.content = content;
    commentData.rating = rating;

    console.log(`Trying to createComment ${commentData}`);

    const comment = await createComment(commentData);

    if (comment) {
      res.send(comment);
    } else {
      next({
        name: "CommentCreationError",
        message: "There was an error creating your comment. Try again.",
      });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

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

commentsRouter.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const comment = await getCommentById(id);

    res.send({ comment });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

commentsRouter.patch("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { user_id, book_id, content, rating } = req.body;

  try {
    const updatedComment = await updateComment(
      id,
      user_id,
      book_id,
      content,
      rating
    );
    res.send(updatedComment);
  } catch ({ name, message }) {
    console.error({ name, message });
    next({ name, message });
  }
});

commentsRouter.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const comment = await deleteCommentById(id);

    if (!comment) {
      next({
        name: "NotFound",
        message: `Cannot find comment with ID ${id} to delete.`,
      });
    } else {
      res.send({ success: true, comment });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = commentsRouter;
