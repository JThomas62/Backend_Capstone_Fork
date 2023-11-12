const express = require("express");
const booksRouter = express.Router();

const { getAllBooks, createBook, deleteBookById } = require("../db");

booksRouter.get("/", async (req, res, next) => {
  try {
    const allBooks = await getAllBooks();

    res.send({
      allBooks,
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

booksRouter.post("/", async (req, res, next) => {
  const { title, author, rating, description, genre_id, image_url, active } =
    req.body;

  const bookData = {};

  try {
    bookData.title = title;
    bookData.author = author;
    bookData.rating = rating;
    bookData.description = description;
    bookData.genre_id = genre_id;
    bookData.image_url = image_url;
    bookData.active = active;

    console.log(`Trying to createBook ${bookData}`);

    const book = await createBook(bookData);

    if (book) {
      res.send(book);
    } else {
      next({
        name: "BookCreationError",
        message: "There was an error creating your book. Try again.",
      });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

booksRouter.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await deleteBookById(id);

    if (!book) {
      next({
        name: "NotFound",
        message: `Cannot find book with ID ${id} to delete.`,
      });
    } else {
      res.send({ success: true, book });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = booksRouter;
