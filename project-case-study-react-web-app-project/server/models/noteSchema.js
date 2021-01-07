const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Note = new Schema(
    {
        note: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('notes', Note)