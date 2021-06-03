module.exports = {
    name: 'skip',
    description: 'To skip song',
    async run(m) {
        m.delete();
        let d = require('../Modules/DisTube'),
            q = await d.getQueue(m), o = {
                username: 'Univers Network Song Player',
                avatarURL: 'https://i.imgur.com/pBmA5S6.png'
            }, { MessageEmbed } = require('discord.js'),
            wh = await m.channel.fetchWebhooks(),
            w = wh.first();
        if (q) {
            d.skip(m).then(w.send({
                username: o.username,
                avatarURL: o.avatarURL,
                embeds: [new MessageEmbed()
                    .setTitle('**Prefix:** `' + require('../Functions/Handlers').prefix(m) + '`')
                    .setColor('#FBFF00')
                    .setAuthor('UniversNetwork', require('../Modules/Client').user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + '>\n\u200B\n\u200B')
                    .addField(':track_next: **Melewati Lagu!**', '\u200B')
                    .setFooter('Made By ARVIN3108 ID', process.env.Icon || require('../config.json').Icon)]
            }));
        } else if (!queue) w.send(':x: **Bot tidak sedang memutar lagu!**', o);
    }
};