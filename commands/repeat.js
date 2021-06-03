module.exports = {
    name: 'repeat',
    alias: 'loop',
    description: 'To loop song',
    async run(m, a) {
        m.delete()
        let d = require('../Modules/DisTube'), q = await d.getQueue(m), wh = await m.channel.fetchWebhooks(),
            o = { username: 'UniversNetwork Song Player', avatarURL: 'https://i.imgur.com/pBmA5S6.png' },
            mode = d.setRepeatMode(m, parseInt(a[0])), { MessageEmbed } = require('discord.js'), w = wh.first();
        mode = mode ? mode == 2 ? "Repeat Semua Lagu" : "Repeat Lagu Ini" : "Mati";
        if (q) {
            w.send({
                username: o.username,
                avatarURL: o.avatarURL,
                embeds: [new MessageEmbed()
                    .setTitle('**Prefix:** `' + await require('../Functions/Handlers').prefix(m) + '`')
                    .setColor('#02C2FF')
                    .setAuthor('UniversNetwork', require('../Modules/Client').user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setDescription(':clipboard: **Diminta Oleh** <@' + m.author + '>\n\u200B')
                    .addField('\u200B', '\u200B', true).addField('**Song Player**', '\u200B', true)
                    .addField('\u200B', '\u200B', true).addField(":repeat: **Mode Repeat Saat Ini** `" + mode + "`", '\u200B')
                    .setFooter('Made By ARVIN3108 ID', process.env.Icon || require('../config.json').Icon)]
            })
        } else if (!q) {
            w.send(':x: **Bot tidak sedang memutar lagu!**', o)
        }
    }
}