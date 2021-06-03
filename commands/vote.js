let { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'vote',
    description: 'This is a vote command',
    async run(m) {
        m.delete().then(m.channel.send(new MessageEmbed()
            .setAuthor('UniversNetwork', require('../Modules/Client').user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
            .setColor('#15FF02')
            .setTitle('**Prefix:** `' + await require('../Functions/Handlers').prefix(m) + '`')
            .setDescription(':clipboard: **Diminta Oleh** <@' + m.author + '>\n\u200B\n\u200B')
            .setImage('https://minecraft-mp.com/images/banners/banner-272254-1611571259.gif')
            .addField('\u200B', '\u200B', true)
            .addField('List Of Vote Link', '\u200B', true)
            .addField('\u200B', '\u200B', true)
            .addField('Minecraft-MP', 'https://minecraft-mp.com/server/272254/vote/')
            .addField('MinecraftServers', 'https://minecraftservers.org/vote/600734')
            .setFooter('Made By ARVIN3108 ID', process.env.Icon || require('../config.json').Icon)))
    }
}