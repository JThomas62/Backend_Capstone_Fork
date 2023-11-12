const express = require("express");
const genresRouter = express.Router();

const {
  createGenre,
  getAllGenres,
  getGenreById,
  updateGenre,
  deleteGenreById,
} = require("../db");

//need to change once genre dropdown is added
genresRouter.post("/", async (req, res, next) => {
  const { name } = req.body;

  const genreData = {};

  try {
    genreData.name = name;
    console.log(`Trying to createGenre ${genreData}`);

    const genre = await createGenre(genreData);

    if (genre) {
      res.send(genre);
    } else {
      next({
        name: "GenreCreationError",
        message: "There was an error creating your genre. Try again.",
      });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

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
//NOTE!! DELETE will not work if... Need to to create an alert for admin page that you cannot delete a genre that is being used.

genresRouter.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const genre = await deleteGenreById(id);

    if (!genre) {
      next({
        name: "NotFound",
        message: `Cannot find genre with ID ${genre_id} to delete.`,
      });
    } else {
      res.send({ success: true, genre });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = genresRouter;
