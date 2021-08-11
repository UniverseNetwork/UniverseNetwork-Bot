let { Message } = require('discord.js')
module.exports = {
    name: 'leave', description: 'stop the bot and leave the channel',
    alias: ['dc', 'disconnect'],
    /**
     * @param {Message} m
     */async run(m) {
        m.delete(); let d = require('../Modules/DisTube'), g = m.client.guilds.cache.get('761872006513033238'),
            o = { username: `${g.name} Song Player`, avatarURL: 'https://i.imgur.com/pBmA5S6.png' }, w = (await m.channel.fetchWebhooks()).first(),
            { MessageEmbed } = require('discord.js'), c = m.guild.members.cache.get(m.client.user.id);
        if (!c.voice.channel) return w.send({ content: ':x: **Bot tidak sedang berada di voice channel!**', username: o.username, avatarURL: o.avatarURL })
        w.send({
            username: o.username, avatarURL: o.avatarURL, embeds: [new MessageEmbed()
                .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                .setDescription(`:clipboard: **Diminta Oleh** ${m.author}\n\u200B`)
                .addField('\u200B', '\u200B', true).addField('Song Player', '\u200B', true).addField('\u200B', '\u200B', true)
                .addField(':no_entry: **Meninggalkan Voice Channel**', `<#${c.voice.channel.id}>`)
                .setFooter('Made By ARVIN3108 ID', process.env.Icon || require('../config.json').Icon).setColor('#FF0000')]
        }).then(d.voices.leave(m));
    }
}