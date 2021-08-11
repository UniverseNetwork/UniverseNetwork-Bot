let { Message } = require('discord.js');
module.exports = {
    name: 'pause',
    async run(m) {
        m.delete(); let d = require('../Modules/DisTube'), g = m.client.guilds.cache.get('761872006513033238'),
            ////o = { username: `${g.name} Song Player`, avatarURL: 'https://i.imgur.com/pBmA5S6.png' }, 
            q = await d.getQueue(m), { MessageEmbed } = require('discord.js');
        if (q) {
            d.pause(m); m.channel.send({
                embeds: [new MessageEmbed()
                    .setColor('#02C2FF')
                    .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setDescription(`:clipboard: **Diminta Oleh** ${m.author}\n\u200B`)
                    .addField('\u200B', '\u200B', true).addField('**Song Player**', '\u200B', true)
                    .addField('\u200B', '\u200B', true).addField(':pause_button: **Menjeda Lagu!**', '\u200B')
                    .setFooter('Made By ARVIN3108 ID', process.env.Icon || require('../config.json').Icon)]
            })
        } else if (!q) {
            m.channel.send({ content: ':x: **Bot tidak sedang memutar lagu!**' })
        }
    }
}