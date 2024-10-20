const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables

// Create a Sequelize instance and configure your database
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql', // For MySQL, you can use 'mysql'
    port: process.env.DB_PORT,
    logging: false, // Set to true if you want Sequelize to log SQL queries
});

// Test the connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

// Export the sequelize instance to use in other parts of the app
module.exports = sequelize;
