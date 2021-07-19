module.exports = {
    name: 'ping', description: 'To Calculate Bot & API ping', run(m) {
        let { MessageEmbed } = require('discord.js'), g = m.client.guilds.cache.get('761872006513033238');
        m.delete(); m.channel.send({ content: ':hourglass: **Menghitung Ping...**' }).then(r => r.edit({
            content: null, embeds: [new MessageEmbed()
                .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                .setColor('#15FF02').setDescription(`:clipboard: **Diminta Oleh** ${m.author}\n\u200B`)
                .addField('🤖 Bot Latency', `${r.createdTimestamp - m.createdTimestamp}`, true)
                .addField('🌐 WebSocket Latency', `${m.client.ws.ping}`, true)
                .setFooter('Made By ARVIN3108 ID', process.env.Icon || require('../config.json').Icon)]
        }));
    }
};