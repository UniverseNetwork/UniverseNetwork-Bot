let { model, Schema } = require('mongoose')
module.exports = model('Clock', new Schema({
    Guild: String,
    Parent: String,
    WIB: String,
    WITA: String,
    WIT: String
}))