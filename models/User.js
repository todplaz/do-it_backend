const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    avatar: {type: String},
    tasksAssigned: [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}],
    tasksCreated: [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}],
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);