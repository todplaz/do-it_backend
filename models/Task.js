const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String},
    status: {type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending'},
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    dueDate: { type: Date },
    media: { type: String }, // Pour les medias comme les images ou les photos
    notifications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Notification' }]
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);