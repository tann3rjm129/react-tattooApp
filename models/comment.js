const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    author: { type: String, default: '' },
    text: { type: String, default: '' },
    projectId: { type: String, required: true },
    timeStamp: { type: Date, default: Date.now() },
    isDeleted: { type: Boolean, default: false }
});

const comment = mongoose.model('comment', commentSchema);

module.exports = comment;