const Task = require('../models/Task');

// Controller to retrieve all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll(); // Use findAll() to retrieve all tasks
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller to add a new task
exports.createTask = async (req, res) => {
    const { title, description } = req.body;
    // Validate title and description
    if (!title || !description) {
        return res.status(400).json({ message: "Title and description are required" });
    }
    try {
        const newTask = await Task.create({ title, description }); // Use create() to add a new task
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controller to update a task's status
exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    // Validate completed field
    if (typeof completed !== 'boolean') {
        return res.status(400).json({ message: "Completed field must be a boolean value" });
    }
    try {
        await Task.update({ completed }, { where: { id } }); // Use update() to update a task
        res.json({ message: 'Task updated' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller to delete a task
exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    // Validate id parameter
    if (!id) {
        return res.status(400).json({ message: "Task ID is required" });
    }
    try {
        await Task.destroy({ where: { id } }); // Use destroy() to delete a task
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
