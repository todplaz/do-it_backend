const express = require('express');
const router = express.Router();
const Notification = require('../models/Notification');

// Récupérer les notifications d'un utilisateur
router.get('/:userId', async (req, res) => {
  try {
    const notifications = await Notification.find({ recipient: req.params.userId });
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notifications', error });
  }
});

// Marquer une notification comme lue
router.put('/:id/mark-as-read', async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(req.params.id, { isRead: true }, { new: true });
    res.json({ message: 'Notification marked as read', notification });
  } catch (error) {
    res.status(500).json({ message: 'Error updating notification', error });
  }
});

module.exports = router;