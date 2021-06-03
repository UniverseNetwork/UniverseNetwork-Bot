module.exports = g => {
    let o = { Guild: g.id },
    s = require('../../Handlers/Schema');
    s.prefix.findOne(options, (e, d) => {
        if (d) schema.prefix.findOneAndDelete(o);
    });
    s.blacklisted.channel.findOne(options, (e, d) => {
        if (d) schema.blacklisted.channel.findOneAndDelete(o);
    });
    s.ticket.findOne(options, (e, d) => {
        if (d) schema.ticket.findOneAndDelete(o);
    });
}