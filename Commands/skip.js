module.exports = {
    name: 's',
    alias: 'skip',
    description: 'To skip song',
    async run(m) {
        m.delete();
        let d = require('../Modules/DisTube'), q = await d.getQueue(m),
            g = m.client.guilds.cache.get('761872006513033238'), o = {
                username: `${g.name} Song Player`, avatarURL: 'https://i.imgur.com/pBmA5S6.png'
            }, w = (await m.channel.fetchWebhooks()).first(), { MessageEmbed } = require('discord.js');
        if (q) {
            d.skip(m).then(w.send({
                username: o.username, avatarURL: o.avatarURL, embeds: [new MessageEmbed().setColor('#FBFF00')
                    .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setDescription(`:clipboard: **Diminta Oleh** ${m.author}\n\u200B\n\u200B`)
                    .addField(':track_next: **Melewati Lagu!**', '\u200B')
                    .setFooter('Made By ARVIN3108 ID', process.env.Icon || require('../config.json').Icon)]
            }));
        } else if (!q) w.send({
            username: o.username, avatarURL: o.avatarURL,
            content: ':x: **Bot tidak sedang memutar lagu!**'
        });
    }
};