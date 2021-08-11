module.exports = {
    name: 'resume',
    async run(m) {
        m.delete()
        let d = require('../Modules/DisTube'), g = m.client.guilds.cache.get('761872006513033238'),
        ////o = { username: `${g.name} Song Player`, avatarURL: 'https://i.imgur.com/pBmA5S6.png' },
            { MessageEmbed } = require('discord.js'), q = await d.getQueue(m);
        if (q) {
            d.resume(m); m.channel.send({
                embeds: [new MessageEmbed()
                    .setColor('#02C2FF').setDescription(`:clipboard: **Diminta Oleh** ${m.author}\n\u200B`)
                    .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .addField('\u200B', '\u200B', true).addField('**Song Player**', '\u200B', true)
                    .addField('\u200B', '\u200B', true).addField(':arrow_forward: **Melanjutkan Lagu!**', '\u200B')
                    .setFooter('Made By ARVIN3108 ID', process.env.Icon || require('../config.json').Icon)]
            });
        } else if (!q) m.channel.send({ content: ':x: **Bot tidak sedang memutar lagu!**'});
    }
}