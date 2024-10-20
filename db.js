const mysql = require('mysql2/promise');
require('dotenv').config(); // Load environment variables

// Create a pool of connections
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 50
});

// Export the pool for use in your application
module.exports = pool;
