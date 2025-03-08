// Routes pour les taches
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Récupérer toutes les taches
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find().populate('assignedTo createdBy');
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks', error });
  }
});

// Créer une nouvelle tache
router.post('/', async (req, res) => {
  const { title, description, status, assignedTo, createdBy, dueDate } = req.body;
  try {
    const newTask = new Task({ title, description, status, assignedTo, createdBy, dueDate });
    await newTask.save();
    res.status(201).json({ message: 'Task created successfully', task: newTask });
  } catch (error) {
    res.status(500).json({ message: 'Error creating task', error });
  }
});

// Mettre à jour une tache
router.put('/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: 'Task updated successfully', task: updatedTask });
  } catch (error) {
    res.status(500).json({ message: 'Error updating task', error });
  }
});

// Supprimer une tache
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting task', error });
  }
})

module.exports = router;