const { Schema, model } = require('mongoose');
module.exports = model('BlackListed Channels', new Schema({
    Guild: String,
    Channels: Array
}))