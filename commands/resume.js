module.exports = {
    name: 'resume',
    async run(m) {
        m.delete
        let d = require('../Modules/DisTube'), g = require('../Modules/Client').guilds.cache.get('761872006513033238'),
            { MessageEmbed } = require('discord.js'), wh = await m.channel.fetchWebhooks(), w = wh.first(), q = await d.getQueue(message),
            o = { username: `${g.name} Song Player`, avatarURL: 'https://i.imgur.com/pBmA5S6.png' };
        if (q) {
            d.resume(m); w.send({
                username: o.username,
                avatarURL: o.avatarURL,
                embeds: [new MessageEmbed()
                    .setTitle('**Prefix:** `' + await require('../Functions/Handlers').prefix(m) + '`')
                    .setColor('#02C2FF')
                    .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setDescription(':clipboard: **Diminta Oleh** <@' + m.author + '>\n\u200B')
                    .addField('\u200B', '\u200B', true).addField('**Song Player**', '\u200B', true)
                    .addField('\u200B', '\u200B', true).addField(':arrow_forward: **Melanjutkan Lagu!**', '\u200B')
                    .setFooter('Made By ARVIN3108 ID', process.env.Icon || require('../config.json').Icon)]
            });
        } else if (!q) w.send(':x: **Bot tidak sedang memutar lagu!**', o);
    }
}