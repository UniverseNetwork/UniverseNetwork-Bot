module.exports = {
    name: 'vote', description: 'This is a vote command', run(m) {
        let { MessageEmbed } = require('discord.js'), g = m.client.guilds.cache.get('761872006513033238');
        m.delete().then(m.channel.send({
            embeds: [new MessageEmbed()
                .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                .setColor('#15FF02').setDescription(`:clipboard: **Diminta Oleh** ${m.author}\n\u200B`)
                .setImage('https://minecraft-mp.com/images/banners/banner-272254-1623316957.gif')
                .addField('\u200B', '\u200B', true).addField('List of Vote Link', '\u200B', true)
                .addField('\u200B', '\u200B', true)
                .addField('Minecraft-MP', 'https://minecraft-mp.com/server/272254/vote/')
                .addField('MinecraftServers', 'https://minecraftservers.org/vote/600734')
                .setFooter('Made By ARVIN3108 ID', process.env.Icon || require('../config.json').Icon)]
        }))
    }
}