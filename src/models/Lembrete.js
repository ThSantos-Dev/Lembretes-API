const mongoose = require('mongoose');

const lembreteSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Lembrete', lembreteSchema);