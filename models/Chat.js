const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    messages: [{
      sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      text: { type: String },
      media: { type: String },
      sentAt: { type: Date, default: Date.now }
    }]
}, { timestamps: true });

module.exports = mongoose.model('Chat', ChatSchema);