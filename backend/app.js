const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const pool = require('./config/db');

const taskRoutes = require('./routes/taskRoutes');

// Configure env
dotenv.config();

const app = express();


// Enable CORS for all routes
app.use(cors());
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());



// Routes
app.use('/api/tasks', taskRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
