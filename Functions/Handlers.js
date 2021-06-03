const Schema = require('../Handlers/Schema'),
    { Collection } = require('discord.js');
module.exports = {
    schema: Schema,
    async prefix(message) {
        let Prefix = process.env.Prefix || require('../config.json').Prefix,
            data = await Schema.prefix.findOne({ Guild: message.guild.id }).catch(e => console.log(e));
        if (data) Prefix = data.Prefix;
        return Prefix;
    }, blacklisted: {
        async channel(message) {
            let ch = null,
                data = await Schema.blacklisted.channel.findOne({ Guild: message.guild.id }).catch(e => console.log(e));
            if (data) data.Channels.map(i => {
                if (message.channel.id.includes(i)) ch = true
            })
            return ch;
        }
    }, commands() {
        require('../Handlers/Commands.js')()
        console.log('Loaded ' + require('../Collections/Commands').size + ' Commands')
    }, events() {
        require('../Handlers/Events.js')()
        console.log('Loaded ' + require('../Collections/Events').size + ' Events')
    }
}