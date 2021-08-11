module.exports = {
    name: 'repeat',
    alias: 'loop',
    description: 'To loop song',
    async run(m, a) {
        m.delete()
        let d = require('../Modules/DisTube'), { MessageEmbed } = require('discord.js'),
            g = m.client.guilds.cache.get('761872006513033238'),
            ////o = { username: 'UniversNetwork Song Player', avatarURL: 'https://i.imgur.com/pBmA5S6.png' },
            r = d.setRepeatMode(m, parseInt(a[0])), q = await d.getQueue(m);
        r = r ? r == 2 ? "Repeat Semua Lagu" : "Repeat Lagu Ini" : "Mati";
        if (q) {
            m.channel.send({
                embeds: [new MessageEmbed()
                    .setColor('#02C2FF').setDescription(`:clipboard: **Diminta Oleh** ${m.author}\n\u200B`)
                    .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .addField('\u200B', '\u200B', true).addField('**Song Player**', '\u200B', true)
                    .addField('\u200B', '\u200B', true).addField(`:repeat: **Mode Repeat Saat Ini** \`${r}\`\u200B`)
                    .setFooter('Made By ARVIN3108 ID', process.env.Icon || require('../config.json').Icon)]
            })
        } else if (!q) {
            m.channel.send({ content: ':x: **Bot tidak sedang memutar lagu!**' })
        }
    }
}