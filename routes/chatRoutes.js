// Routes pour les fonctionnalités de chat
const express = require('express');
const router = express.Router();
const Chat = require('../models/Chat');

// Récupérer tous les conversations d'un utilisateur
router.get('/:userId', async (req, res) => {
  try {
    const chats = await Chat.find({ participants: req.params.userId })
      .populate('participants')
      .populate('messages.sender')
    res.json(chats);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching chats', error });
  }
});

// Créer une nouvelle conversation
router.post('/', async (req, res) => {
  const { participants } = req.body;
  try {
    const newChat = new Chat({ participants, messages: [] });
    await newChat.save();
    res.status(201).json({ message: 'Chat created successfully', chat: newChat });
  } catch (error) {
    res.status(500).json({ message: 'Error creating chat', error });
  }
});

module.exports = router;