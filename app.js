// app.js
const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

// PostgreSQL connection setup
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Test',
  password: 'NJAY2003',
  port: 6000, // Default PostgreSQL port
});

// Test the database connection
pool.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Connection error', err.stack));

// Sample route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/data', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM users'); // Replace with your actual table name
      res.json(result.rows);
    } catch (err) {
      console.error('Error fetching data', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
