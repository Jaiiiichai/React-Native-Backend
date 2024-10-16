// db.js
const { Pool } = require('pg');
require('dotenv').config(); // Load environment variables

// Create a pool of connections
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Export the pool for use in your application
module.exports = pool;
