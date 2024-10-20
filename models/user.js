const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Import the sequelize instance

// Define a User model
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(20),
        allowNull: false,
    }
}, {
    tableName: 'users', // Explicitly specify the table name if different
    timestamps: false, // Disable automatic createdAt and updatedAt columns
});

// Export the model to use it in other parts of the app
module.exports = User;
