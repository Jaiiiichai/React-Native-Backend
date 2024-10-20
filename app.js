const express = require('express');
const app = express();
const sequelize = require('./sequelize'); // Import the Sequelize instance
const User = require('./models/user'); // Import the User model
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); 

// Sync the models with the database
sequelize.sync()
    .then(() => {
        console.log('Database synced successfully.');
    })
    .catch(err => {
        console.error('Error syncing database:', err);
    });

// Route to fetch users from the database
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();  // Fetch all users
        res.json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ message: 'Failed to fetch users' });
    }
});

// Route to add a new user
app.post('/users', async (req, res) => {
    const { email, password } = req.body;
    try {
        const newUser = await User.create({ email, password }); // Create a new user
        res.status(201).json(newUser);
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ message: 'Failed to create user' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
