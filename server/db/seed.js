const {
    client,
    createUser,
    createGenre,

} = require("./index");

const {
  createInitialGenres,
  createInitialUsers,
  createInitialBooks,
  createInitialComments,
} = require("./seedData")

async function dropTables() {
    try {
      console.log("Starting to drop tables...");
  
      // have to make sure to drop in correct order
      await client.query(`
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
        status VARCHAR(20)
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
          comment TEXT NOT NULL,
          rating DECIMAL(3,2),
          CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(user_id),
          CONSTRAINT fk_book_id FOREIGN KEY (book_id) REFERENCES books(book_id)
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

    await dropTables();
    await createTables();
    
    await createInitialGenres();
    await createInitialUsers();
    await createInitialBooks();
    await createInitialComments();
  } catch (error) {
    console.log("Error during rebuildDB");
    throw error;
  }
}