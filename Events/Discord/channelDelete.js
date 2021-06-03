let schema = require('../../Handlers/Schema');
module.exports = c => {
    schema.ticket.findOne({ Channel: c.id }, async (e, d) => {
        if (d) await schema.ticket.findOneAndDelete({ Channel: c.id });
    });
    schema.transcript.findOne({ Channel: c.id }, async (e, d) => {
        if (d) await schema.transcript.findOneAndDelete({ Channel: c.id });
    });
}