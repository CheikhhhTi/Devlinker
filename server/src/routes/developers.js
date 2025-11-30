import express from 'express';
import Developer from '../models/Developer.js';

const router = express.Router();

// Get all developers
router.get('/', async (req, res) => {
  try {
    const developers = await Developer.find().sort({ createdAt: -1 });
    res.json(developers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a developer
router.post('/', async (req, res) => {
  try {
    const developer = new Developer(req.body);
    const savedDeveloper = await developer.save();
    res.status(201).json(savedDeveloper);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get a single developer
router.get('/:id', async (req, res) => {
  try {
    const developer = await Developer.findById(req.params.id);
    if (!developer) return res.status(404).json({ message: 'Developer not found' });
    res.json(developer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a developer
router.delete('/:id', async (req, res) => {
  try {
    const developer = await Developer.findByIdAndDelete(req.params.id);
    if (!developer) return res.status(404).json({ message: 'Developer not found' });
    res.json({ message: 'Developer deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;