module.exports = {
    name: 'loop',
    description: 'To loop song',
    async execute(message, args, distube, wh, Prefix, MessageEmbed, Icon, client) {
        message.delete()
        let queue = await distube.getQueue(message),
            options = {
                username: 'UniversNetwork Song Player',
                avatarURL: 'https://i.imgur.com/pBmA5S6.png'
            }
        if (queue) {
            let mode = distube.setRepeatMode(message, parseInt(args[0]));
            mode = mode ? mode == 2 ? "Repeat Semua Lagu" : "Repeat Lagu Ini" : "Mati";
            wh.send({
                username: options.username,
                avatarURL: options.avatarURL,
                embeds: [new MessageEmbed()
                    .setTitle('**Prefix:** `' + Prefix + '`')
                    .setColor('#02C2FF')
                    .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + '>\n\u200B\n\u200B')
                    .addField(":repeat: **Mode Repeat Saat Ini** `" + mode + "`", '\u200B')
                    .setFooter('Made By ARVIN3108 ID', Icon)]
            })
        } else if (!queue) {
            wh.send(':x: **Bot tidak sedang memutar lagu!**', options)
        }
    }
}