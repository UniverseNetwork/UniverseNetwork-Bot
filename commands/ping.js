let c = require('../Modules/Client'), { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'ping',
    description: 'To Calculate Bot & API ping',
    run(m) {
        m.delete();
        m.channel.send(':hourglass: **Menghitung Ping Dalam 3 Detik...**').then(r => {
            setTimeout(async () => r.edit('', new MessageEmbed()
                .setAuthor('UniversNetwork', c.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                .setColor('#15FF02')
                .setTitle('**Prefix:** `' + await require('../Functions/Handlers').prefix(m) + '`')
                .setDescription(':clipboard: **Diminta Oleh** <@' + m.author + '>\n\u200B')
                .addField('🤖 Bot Latency', r.createdTimestamp - m.createdTimestamp, true)
                .addField('🌐 WebSocket Latency', c.ws.ping, true)
                .setFooter('Made By ARVIN3108 ID', process.env.Icon || require('../config.json').Icon)), 3000);
        });
    }
};