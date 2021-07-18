module.exports = {
    name: "avatar",
    description: "To show avatar",
    run(m) {
        m.delete();
        let member = m.mentions.members.first() || m.member, { MessageEmbed } = require('discord.js'), g = m.client.guilds.cache.get('761872006513033238');
        m.channel.send({
            embeds: [new MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                .setDescription(`:clipboard: **Diminta Oleh** ${m.author}\n\n\u200B ${member} Avatar`)
                .setImage(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
                .setFooter('Made By ARVIN3108 ID', require('../config.json').Icon)]
        })
    }
}