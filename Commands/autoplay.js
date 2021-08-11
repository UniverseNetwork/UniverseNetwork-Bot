module.exports = {
    name: 'autoplay',
    alias: 'ap',
    description: 'To toggle autoplay',
    async execute(m) {
        m.delete()
        let d = require('../Modules/DisTube'), { MessageEmbed } = require('discord.js'),
            q = await d.getQueue(m), wh = await m.channel.fetchWebhooks(), w = wh.first(),
            o = {
                username: 'UniversNetwork Song Player',
                avatarURL: 'https://i.imgur.com/pBmA5S6.png'
            }
        if (q) {
            let mode = d.toggleAutoplay(m)
            w.send({
                username: o.username,
                avatarURL: o.avatarURL,
                embeds: [new MessageEmbed()
                    .setTitle('**Prefix:** `' + require('../Functions/Handlers').prefix(m) + '`')
                    .setColor('#02C2FF')
                    .setAuthor('UniversNetwork', 'https://cdn.discordapp.com/app-icons/792994169659981846/eccf642340521c532b0ade8f00591114.png?size=64', 'https://minecraft-mp.com/server-s272254')
                    .setDescription(':clipboard: **Diminta Oleh** <@' + m.author + '>\n\u200B\n\u200B')
                    .addField(":track_next: **Mode AutoPlay " + (mode ? "Dihidupkan!" : "Dimatikan!") + '**', '\u200B')
                    .setFooter('Made By ARVIN3108 ID', process.env.Icon || require('../config.json').Icon)]
            })
        } else if (!q) {
            w.send(':x: **Bot tidak sedang memutar lagu!**', o)
        }
    }
}