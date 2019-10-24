const mongoose = require('mongoose');
const Schema = mongoose.Schema

// Schema de réalisations
const RealisationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Realisation = mongoose.model('realisation', RealisationSchema);