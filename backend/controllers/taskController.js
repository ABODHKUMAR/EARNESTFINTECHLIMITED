const Task = require('../models/Task');

// Controller to retrieve all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller to add a new task
exports.createTask = async (req, res) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description
        
    });

    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controller to update a task's status
exports.updateTask = async (req, res) => {
    try {
        await Task.findByIdAndUpdate(req.params.id, { completed: req.body.completed });
        res.json({ message: 'Task updated' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller to delete a task
exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
