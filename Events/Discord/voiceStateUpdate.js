let { VoiceState } = require('discord.js')
/**
 * 
 * @param {VoiceState} o 
 * @param {VoiceState} n 
 */
module.exports = (o, n) => {
    console.log("Old: " + o.channelId)
    console.log("New: " + n.channelId)
};
