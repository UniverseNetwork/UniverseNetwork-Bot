const { Schema, model } = require('mongoose');
module.exports = model('Transcript', new Schema({
    Guild: String,
    Channel: String,
    Ticket: String,
    ID: String,
    Status: Number
}))