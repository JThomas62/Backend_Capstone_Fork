const { Client } = require("pg"); // Import pg module
require("dotenv").config();

const client = new Client({
  connectionString: 
    process.env.DATABASE_URL || 
    "https://localhost:5432/bookclub",
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
      ON CONFLICT (email) DO NOTHING
      ON CONFLICT (username) DO NOTHING
      RETURNING *;
      `,
      [name, email, username, password, status]
    );
    return user;
  } catch (error) {
    console.log("createUser() throws error")
    throw error;
  }
}
async function getAllUsers() {
  try {
    const { rows } = await client.query(`
      SELECT *
      FROM users;
    `);
    return { rows };
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
      INSERT INTO genre(name)
      VALUES($1)
      ON CONFLICT (name) DO NOTHING
      RETURNING *;
      `,
      [name]
    );
    return genre;
  } catch (error) {
    console.log("createGenre() throws error")
    throw error;
  } 
}

module.exports = {
  client,
  createUser,
  getAllUsers,
  createGenre,
};