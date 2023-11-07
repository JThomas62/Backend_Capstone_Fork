//PLACEHOLDER CODE

require("dotenv").config();
const express = require("express");
// import db from "./db";
const db = require("./db");
// const morgan = require("morgan");

const app = express();

//Middleware
app.use(express.json());

//Get All Books
app.get("/api/v1/books", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM books");
    console.log(results);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//Get A Book
app.get("/api/v1/books/:id", async (req, res) => {
  console.log(req.params.id);

  try {
    const results = await db.query("SELECT * FROM books WHERE id=$1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//Create a Book
app.post("/api/v1/books", async (req, res) => {
  console.log(req.body);

  try {
    const results = await db.query(
      "INSERT INTO books(title, author, description, imageUrl, genre, active) VALUES ($1, $2, $3, $4, $5, $6) returning *",
      [
        req.body.title,
        req.body.author,
        req.body.description,
        req.body.imageUrl,
        req.body.genre,
        req.body.active,
      ]
    );
    console.log(results);
    res.status(201).json({
      status: "success",
      data: {
        book: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//Update Book
app.put("/api/v1/books/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE books SET title = $1, author = $2, description = $3, imageUrl = $4, genre = $5 active = $6 WHERE id=$7 returning *",
      [
        req.body.title,
        req.body.author,
        req.body.description,
        req.body.imageUrl,
        req.body.genre,
        req.body.active,
        req.params.id,
      ]
    );

    res.status(200).json({
      status: "success",
      data: {
        book: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
  console.log(req.params.id);
  console.log(req.body);
});

//Delete book
app.delete("/api/v1/books/:id", async (req, res) => {
  try {
    const results = await db.query("DELETE FROM books WHERE id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
  console.log(req.params.id);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});
