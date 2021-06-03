require('discord-reply');
let { Client } = require('discord.js'), c = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
require('discord-buttons')(c);
module.exports = c;