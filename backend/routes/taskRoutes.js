const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Retrieve all tasks
router.get('/', taskController.getAllTasks);

// Add a new task
router.post('/', taskController.createTask);

// Update a task's status
router.patch('/:id', taskController.updateTask);

// Delete a task
router.delete('/:id', taskController.deleteTask);

module.exports = router;
