const { Schema, model } = require('mongoose')
module.exports = model('Ticket', new Schema({
    Guild: String,
    Channel: String,
    Ticket: String,
    Transcript: String,
    User: String,
    Opened: Boolean,
    Status: Number
}))