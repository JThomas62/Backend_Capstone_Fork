const express = require("express");
const genresRouter = express.Router();

const { getAllGenres, getGenreById, updateGenre } = require("../db");

genresRouter.get("/", async (req, res, next) => {
  try {
    const allGenres = await getAllGenres();

    res.send({
      allGenres,
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

genresRouter.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const genre = await getGenreById(id);

    res.send({ genre });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

genresRouter.patch("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedGenre = await updateGenre(id, name);
    res.send(updatedGenre);
  } catch ({ name, message }) {
    console.error({ name, message });
    next({ name, message });
  }
});

module.exports = genresRouter;
