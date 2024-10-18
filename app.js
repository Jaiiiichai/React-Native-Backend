const express = require('express');
const app = express();
const pool = require('./db'); // Import the MySQL pool
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); 

// Route to fetch users from the database
app.get('/users', async (req, res) => {
    try {
        // Query the database
        const [rows] = await pool.query('SELECT * FROM users');  // Adjust table name as necessary
        res.json(rows);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ message: 'Failed to fetch users' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
