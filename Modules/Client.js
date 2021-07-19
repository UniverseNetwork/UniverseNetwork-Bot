let { Client, Intents } = require('discord.js'); 
module.exports = new Client({
    restTimeOffset: 0,
    partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_MEMBER'],
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES, 
    Intents.FLAGS.GUILD_WEBHOOKS]
});