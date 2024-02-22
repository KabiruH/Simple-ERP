// Import necessary modules and models
const mongoose = require('mongoose');
const Transaction = require('../models/Transaction');

// Define sample transaction data
const sampleTransactions = [
  { amount: 100, type: 'deposit', description: 'Initial deposit' },
  { amount: -50, type: 'withdrawal', description: 'Grocery shopping' },
  // Add more sample transactions as needed
];

// Define a function to seed data
async function seedTransactions() {
  try {
    // Connect to MongoDB (replace 'mongodb://localhost/myapp' with your MongoDB URI)
    await mongoose.connect('mongodb+srv://kabiru:WJdg2jAlIcX5scPV@cluster0.g9sbqkd.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

    // Remove existing transactions
    await Transaction.deleteMany({});

    // Insert sample transactions into the database
    await Transaction.insertMany(sampleTransactions);

    console.log('Data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
}

// Call the seedTransactions function to seed the data
seedTransactions();
