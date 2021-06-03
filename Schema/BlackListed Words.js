const { Schema, model } = require('mongoose');
module.exports = model('BlackListed Words', new Schema({
    Guild: String,
    Words: Array
}))