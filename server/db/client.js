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

module.exports = {
  client,
};
