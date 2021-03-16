module.exports = {
    name: 'autoplay',
    description: 'To toggle autoplay',
    async execute(message, distube, MessageEmbed, Prefix, wh, Icon) {
        message.delete()
        let queue = await distube.getQueue(message),
            options = {
                username: 'UniversNetwork Song Player',
                avatarURL: 'https://i.imgur.com/pBmA5S6.png'
            }
        if (queue) {
            let mode = distube.toggleAutoplay(message)
            wh.send({
                username: options.username,
                avatarURL: options.avatarURL,
                embeds: [new MessageEmbed()
                    .setTitle('**Prefix:** `' + Prefix + '`')
                    .setColor('#02C2FF')
                    .setAuthor('UniversNetwork', 'https://cdn.discordapp.com/app-icons/792994169659981846/eccf642340521c532b0ade8f00591114.png?size=64', 'https://minecraft-mp.com/server-s272254')
                    .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + '>\n\u200B\n\u200B')
                    .addField(":track_next: **Mode AutoPlay " + (mode ? "Dihidupkan!" : "Dimatikan!") + '**', '\u200B')
                    .setFooter('Made By ARVIN3108 ID', Icon)]
            })
        } else if (!queue) {
            wh.send(':x: **Bot tidak sedang memutar lagu!**', options)
        }
    }
}