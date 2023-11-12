const { Client } = require("pg"); // Import pg module
require("dotenv").config();

const client = new Client({
  connectionString:
    process.env.DATABASE_URL || "https://localhost:5432/bookclub",
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : undefined,
});

// USER Methods
async function createUser({ name, email, username, password, status }) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      INSERT INTO users(name, email, username, password, status)
      VALUES($1, $2, $3, $4, $5)
      ON CONFLICT ON CONSTRAINT users_name_email_unique DO NOTHING
      RETURNING *;
      `,
      [name, email, username, password, status]
    );
    return user;
  } catch (error) {
    console.log("createUser() throws error");
    throw error;
  }
}
async function getAllUsers() {
  try {
    const { rows } = await client.query(`
      SELECT *
      FROM users;
    `);
    return rows;
  } catch (error) {
    throw error;
  }
}

// GENRE Methods
async function createGenre({ name }) {
  try {
    const {
      rows: [genre],
    } = await client.query(
      `
      INSERT INTO genres(name)
      VALUES($1)
      ON CONFLICT (name) DO NOTHING
      RETURNING *;
      `,
      [name]
    );
    return genre;
  } catch (error) {
    console.log("createGenre() throws error");
    throw error;
  }
}
async function getAllGenres() {
  try {
    const { rows } = await client.query(`
      SELECT *
      FROM genres;
    `);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getGenreById(id) {
  try {
    const {
      rows: [genre],
    } = await client.query(`SELECT * FROM genres WHERE genre_id = $1`, [id]);

    if (!genre) {
      throw {
        name: "Genre(ID)NotFoundError",
        message: `Genre with genre_id: ${id} does not exist`,
      };
    }
    return genre;
  } catch (error) {
    throw error;
  }
}

async function updateGenre(id, name) {
  try {
    const {
      rows: [genre],
    } = await client.query(
      `UPDATE genres SET name = $2 WHERE genre_id=$1 RETURNING *;`,
      [id, name]
    );
    return genre;
  } catch (error) {
    throw error;
  }
}

async function deleteGenreById(id) {
  try {
    const {
      rows: [genre],
    } = await client.query(
      `
  DELETE FROM genres
  WHERE genre_id = $1
  RETURNING *;
  `,
      [id]
    );
    return genre;
  } catch (error) {
    throw error;
  }
}
// BOOK Method
async function createBook({
  title,
  author,
  rating,
  description,
  genre_id,
  image_url,
  active,
}) {
  try {
    const {
      rows: [book],
    } = await client.query(
      `
      INSERT INTO books(title, author, rating, description, genre_id, image_url, active)
      VALUES($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `,
      [title, author, rating, description, genre_id, image_url, active]
    );
    return book;
  } catch (error) {
    console.log("createBook() throws error");
    throw error;
  }
}
async function getAllBooks() {
  try {
    const { rows } = await client.query(`
      SELECT *
      FROM books;
    `);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function deleteBookById(id) {
  try {
    const {
      rows: [book],
    } = await client.query(
      `
    DELETE FROM books
    WHERE book_id = $1
    RETURNING *;
  `,
      [id]
    );
    return book;
  } catch (error) {
    throw error;
  }
}

// COMMENT methods
async function createComment({ user_id, book_id, content, rating }) {
  try {
    const {
      rows: [comment],
    } = await client.query(
      `
      INSERT INTO comments(user_id, book_id, content, rating)
      VALUES($1, $2, $3, $4)
      RETURNING *;
    `,
      [user_id, book_id, content, rating]
    );
    return comment;
  } catch (error) {
    console.log("createComment() throws error");
    throw error;
  }
}
async function getAllComments() {
  try {
    const { rows } = await client.query(`
      SELECT *
      FROM comments;
    `);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  client,
  createGenre,
  getAllGenres,
  getGenreById,
  updateGenre,
  deleteGenreById,
  createUser,
  getAllUsers,
  createBook,
  getAllBooks,
  deleteBookById,
  createComment,
  getAllComments,
};
