const express = require("express");
const booksRouter = express.Router();

const {
  createBook,
  getAllBooks_With_Rating,
  getBookById,
  updateBook,
  deleteBookById,
} = require("../db");

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

booksRouter.get("/", async (req, res, next) => {
  try {
    const allBooks = await getAllBooks_With_Rating();

    res.send({
      allBooks,
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

booksRouter.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const book = await getBookById(id);

    res.send({ book });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

booksRouter.patch("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { title, author, rating, description, genre_id, image_url, active } =
    req.body;

  try {
    const updatedBook = await updateBook(
      id,
      title,
      author,
      rating,
      description,
      genre_id,
      image_url,
      active
    );

    res.send({ book: updatedBook });
  } catch ({ name, message }) {
    console.error({ name, message });
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
