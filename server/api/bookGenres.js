const express = require("express");
const bookGenresRouter = express.Router();

const {
  getAllBookGenres,
  getGenresByBookId,
  addGenreToBook,
  deleteGenreFromBook,
} = require("../db");

bookGenresRouter.get("/", async (req, res, next) => {
  try {
    const allBookGenres = await getAllBookGenres();
    res.send({
      allBookGenres,
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

bookGenresRouter.get("/:book_id", async (req, res, next) => {
  const { book_id } = req.params;
  try {
    const genres = await getGenresByBookId(book_id);
    res.send({
      genres,
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

bookGenresRouter.post("/:book_id", async (req, res, next) => {
  const { book_id } = req.params;
  const { genre_id } = req.body;
  const bookGenre = {};
  try {
    bookGenre.book_id = book_id;
    bookGenre.genre_id = genre_id;
    console.log(bookGenre);
    const response = await addGenreToBook(bookGenre);

    if (response) {
      res.send(response);
    } else {
      next({
        name: "AddGenreToBookError",
        message: "Error adding Genre to your Book",
      });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

bookGenresRouter.delete("/:book_id", async (req, res, next) => {
  const { book_id } = req.params;
  const { genre_id } = req.body;
  const bookGenre = {};
  try {
    bookGenre.book_id = book_id;
    bookGenre.genre_id = genre_id;
    console.log(bookGenre);
    const response = await deleteGenreFromBook(bookGenre);

    if (response) {
      res.send(response);
    } else {
      next({
        name: "DeleteGenreFromBookError",
        message: "Error deleting Genre from your Book",
      });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});
module.exports = bookGenresRouter;
