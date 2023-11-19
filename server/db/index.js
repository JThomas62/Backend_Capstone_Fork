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
      ON CONFLICT ON CONSTRAINT users_username_email_unique DO NOTHING
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

async function getUserById(id) {
  try {
    const {
      rows: [user],
    } = await client.query(`SELECT * FROM users WHERE user_id = $1`, [id]);

    if (!user) {
      throw {
        name: "User(ID)NotFoundError",
        message: `User with user_id: ${id} does not exist`,
      };
    }
    return user;
  } catch (error) {
    throw error;
  }
}

async function updateUser(id, name, email, username, password, status) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `UPDATE users SET name = $2, email = $3, username = $4, password = $5, status = $6 WHERE user_id=$1 RETURNING *;`,
      [id, name, email, username, password, status]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

async function deleteUserById(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
  DELETE FROM users
  WHERE user_id = $1
  RETURNING *;
  `,
      [id]
    );
    return user;
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

async function getBookById(id) {
  try {
    const {
      rows: [book],
    } = await client.query(`SELECT * FROM books WHERE book_id = $1`, [id]);

    if (!book) {
      throw {
        name: "Book(ID)NotFoundError",
        message: `Book with id: ${book_id} does not exist`,
      };
    }
    return book;
  } catch (error) {
    throw error;
  }
}

async function updateBook(
  book_id,
  title,
  author,
  rating,
  description,
  genre_id,
  image_url,
  active
) {
  try {
    const {
      rows: [book],
    } = await client.query(
      `UPDATE books SET title = $2, author = $3, rating = $4, description = $5, genre_id = $6, image_url = $7, active = $8 WHERE book_id=$1 RETURNING *;`,
      [book_id, title, author, rating, description, genre_id, image_url, active]
    );
    return book;
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

async function getCommentById(id) {
  try {
    const {
      rows: [comment],
    } = await client.query(`SELECT * FROM comments WHERE comment_id = $1`, [
      id,
    ]);

    if (!comment) {
      throw {
        name: "Comment(ID)NotFoundError",
        message: `Comment with comment_id: ${id} does not exist`,
      };
    }
    return comment;
  } catch (error) {
    throw error;
  }
}

async function updateComment(id, user_id, book_id, content, rating) {
  try {
    const {
      rows: [comment],
    } = await client.query(
      `UPDATE comments SET user_id = $2, book_id = $3, content = $4, rating = $5 WHERE comment_id=$1 RETURNING *;`,
      [id, user_id, book_id, content, rating]
    );
    return comment;
  } catch (error) {
    throw error;
  }
}

async function deleteCommentById(id) {
  try {
    const {
      rows: [comment],
    } = await client.query(
      `
  DELETE FROM comments
  WHERE comment_id = $1
  RETURNING *;
  `,
      [id]
    );
    return comment;
  } catch (error) {
    throw error;
  }
}

// BOOKGENRES methods; CAUTION: Be careful with spelling of genres (not generes)

async function getAllBookGenres() {
  try {
    const { rows } = await client.query(`
      SELECT *
      FROM book_genres;
    `);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getGenresByBookId(book_id) {
  try {
    const { rows } = await client.query(
      `
      SELECT *
      FROM book_genres WHERE book_id = $1;
    `,
      [book_id]
    );
    const genres = await Promise.all(
      rows.map(async (row) => {
        console.log(row.genre_id);
        const genre = await getGenreById(row.genre_id);
        console.log(genre);
        return genre;
      })
    );
    return genres;
  } catch (error) {
    throw error;
  }
}

async function addGenreToBook({ book_id, genre_id }) {
  try {
    const {
      rows: [bookGenre],
    } = await client.query(
      `
    INSERT INTO book_genres(book_id, genre_id) 
    VALUES($1, $2)
    ON CONFLICT ON CONSTRAINT bookGenres_book_Id_genre_Id_unique DO NOTHING RETURNING *;
    `,
      [book_id, genre_id]
    );
    return bookGenre;
  } catch (error) {
    throw error;
  }
}

async function deleteGenreFromBook({ book_id, genre_id }) {
  try {
    const {
      rows: [bookGenre],
    } = await client.query(
      `
    DELETE FROM book_genres WHERE book_id = $1 AND genre_id = $2 RETURNING *;
    `,
      [book_id, genre_id]
    );
    return bookGenre;
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
  getUserById,
  updateUser,
  deleteUserById,
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBookById,
  createComment,
  getAllComments,
  getCommentById,
  updateComment,
  deleteCommentById,
  addGenreToBook,
  getAllBookGenres,
  getGenresByBookId,
  deleteGenreFromBook,
};
