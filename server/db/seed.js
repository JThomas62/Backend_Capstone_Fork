const {
  client,
  getAllGenres,
  getAllUsers,
  getAllBooks,
  getAllComments,
  getAllBookGenres,
} = require("./index");

const {
  createInitialGenres,
  createInitialUsers,
  createInitialBooks,
  createInitialComments,
  createInitialBookGenres,
} = require("./seedData");

async function dropTables() {
  try {
    console.log("Starting to drop tables...");

    // have to make sure to drop in correct order--comments, books, genres, users
    await client.query(`
        DROP TABLE IF EXISTS book_genres;
        DROP TABLE IF EXISTS comments;
        DROP TABLE IF EXISTS books;
        DROP TABLE IF EXISTS genres;
        DROP TABLE IF EXISTS users;
      `);

    console.log("Finished dropping tables!");
  } catch (error) {
    console.error("Error dropping tables!");
    throw error;
  }
}

async function createTables() {
  try {
    console.log("Starting to build tables...");

    await client.query(`
      CREATE TABLE genres (
          genre_id SERIAL PRIMARY KEY,
          name VARCHAR(100) UNIQUE NOT NULL
      );
      CREATE TABLE users (
        user_id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        username VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(50) NOT NULL,
        status VARCHAR(20),
        CONSTRAINT users_username_email_unique UNIQUE (username, email )
    );
      CREATE TABLE books (
        book_id SERIAL PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        author VARCHAR(100) NOT NULL,
        rating DECIMAL(3,2),
        description TEXT,
        genre_id INT NOT NULL,
        image_url VARCHAR(255),
        active BOOLEAN,
        CONSTRAINT fk_genre_id FOREIGN KEY(genre_id) REFERENCES genres(genre_id)
      );
      CREATE TABLE comments (
          comment_id SERIAL PRIMARY KEY,
          user_id INT NOT NULL,
          book_id INT NOT NULL,
          content TEXT NOT NULL,
          rating DECIMAL(3,2),
          CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(user_id),
          CONSTRAINT fk_book_id FOREIGN KEY (book_id) REFERENCES books(book_id)
      );
      CREATE TABLE book_genres (
        id SERIAL PRIMARY KEY,
        book_id INT NOT NULL,
        genre_id INT NOT NULL,
        CONSTRAINT fk_book_id FOREIGN KEY (book_id) REFERENCES books(book_id),
        CONSTRAINT fk_genre_id FOREIGN KEY (genre_id) REFERENCES genres(genre_id),
        CONSTRAINT bookGenres_book_Id_genre_Id_unique UNIQUE (book_id, genre_id)
    );
    `);
    console.log("Finished building tables!");
  } catch (error) {
    console.error("Error building tables!");
    throw error;
  }
}

async function rebuildDB() {
  try {
    client.connect();
    // have to make sure to rebuild in correct order--tables, genres, users, books, comments
    await dropTables();
    await createTables();
    await createInitialGenres();
    await createInitialUsers();
    await createInitialBooks();
    await createInitialComments();
    await createInitialBookGenres();
  } catch (error) {
    console.log("Error during rebuildDB");
    throw error;
  }
}
async function testDB() {
  try {
    console.log("Starting to test database...");

    console.log("Calling getAllGenres");
    const genres = await getAllGenres();
    console.log("Result:", genres);

    console.log("Calling getAllUsers");
    const users = await getAllUsers();
    console.log("Result:", users);

    console.log("Calling getAllBooks");
    const books = await getAllBooks();
    console.log("Result:", books);

    console.log("Calling getAllComments");
    const comments = await getAllComments();
    console.log("Result:", comments);

    console.log("Calling getAllBookGenres");
    const bookGenres = await getAllBookGenres();
    console.log("Result:", bookGenres);

    console.log("Finished database tests!");
  } catch (err) {
    console.error(err);
  }
}
rebuildDB()
  .then(testDB)
  .catch(console.error)
  .finally(() => client.end());
