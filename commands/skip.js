module.exports = {
    name: 'skip',
    description: 'To skip song',
    async execute(message, distube, wh, Prefix, MessageEmbed, Icon, client) {
        message.delete()
        let queue = await distube.getQueue(message),
            options = {
                username: 'UniversNetwork Song Player',
                avatarURL: 'https://i.imgur.com/pBmA5S6.png'
            };

        if (queue) {
            distube.skip(message).then(wh.send({
                username: options.username,
                avatarURL: options.avatarURL,
                embeds: [new MessageEmbed()
                    .setTitle('**Prefix:** `' + Prefix + '`')
                    .setColor('#FBFF00')
                    .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + '>\n\u200B\n\u200B')
                    .addField(':track_next: **Melewati Lagu!**', '\u200B')
                    .setFooter('Made By ARVIN3108 ID', Icon)]
            }))
        } else if (!queue) {
            wh.send(':x: **Bot tidak sedang memutar lagu!**', options)
        }
    }
}