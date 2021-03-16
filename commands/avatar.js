const { Message, Client } = require('discord.js')
module.exports = {
    name: "avatar",
    description: "To show avatar",
    /**
    * @param {Message} message
    * @param {String[]} args
    * @param {Client} client
    */
    execute(message, MessageEmbed, Icon, Prefix, client) {
        message.delete()
        const member = message.mentions.members.first() || message.member;

        message.channel.send(
            new MessageEmbed()
                .setColor('RANDOM')
                .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                .setTitle('**Prefix:** `' + Prefix + '`')
                .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + '>\n\u200B\n\u200B' + `<@${member.id}> Avatar`)
                .setImage(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
                .setFooter('Made By ARVIN3108 ID', Icon))
    }
}