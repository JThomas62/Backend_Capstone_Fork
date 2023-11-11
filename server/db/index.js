//PLACEHOLDER CODE

//Pool allows us to connect to Postgres database. Therefore, we will then export this to other files as needed to allow for queries using  await db.query(...SQL Code HERE...)

const { Pool } = require("pg");
// import { Pool } from "pg";

// Pool allows interaction with Postgres Library; Info is no longer necessary to add here since it is in .env file
const pool = new Pool();

// export const query = (text, params) => pool.query(text, params);


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


module.exports = {
  client,
};