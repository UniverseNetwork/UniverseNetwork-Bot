const { Message, Client } = require('discord.js')

module.exports = {
    name: 'nick',
    description: 'To change nickname',
    /**
    * @param {Message} message
    * @param {String[]} args
    * @param {Client} client
    */
    execute(message, args, cmd, MessageEmbed, Prefix, Icon, client) {
        message.delete()
        const q1 = args[0],
            q2 = args.slice(1).join(' '),
            BotOwner = client.users.cache.get('700166055326384179'),
            user = message.mentions.members.first() || message.member;

        if (!message.mentions.members.first()) {
            try {
                user.setNickname(q1).catch(err => {
                    console.log(err)
                    return message.channel.send(`:x: **Bot Tidak Punya Izin Untuk Mengubah Nama** <@${user.id}>`)
                })
                // message.channel.send(new MessageEmbed()
                //     .setColor('#17FF00')
                //     .setTitle('**Prefix:** `' + Prefix + '`')
                //     .setAuthor('UniversNetwork', 'https://cdn.discordapp.com/app-icons/792994169659981846/eccf642340521c532b0ade8f00591114.png?size=64', 'https://minecraft-mp.com/server-s272254')
                //     .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + '>\n\u200B')
                //     .addField('\u200B', ':bust_in_silhouette: **Mengubah Nama** <@' + user.id + '> **Menjadi** `' + q1 + '`')
                //     .setFooter('Made By ARVIN3108 ID', Icon))
            } catch (err) {
                BotOwner.send(err, { code: 'js' })
                message.channel.send(':x: **Error Terdeteksi! Melaporkan Error Ke <@700166055326384179>**')
            }
        } else if (message.mentions.members.first()) {
            if (!message.member.permissions.has('MANAGE_NICKNAMES')) return message.channel.send(':x: **Kamu Tidak Punya Izin Untuk Mengubah Nama Member Lain!')
            try {
                user.setNickname(q2).catch(err => {
                    console.log(err)
                    return message.channel.send(`:x: **Bot Tidak Punya Izin Untuk Mengubah Nama** <@${user.id}>`)
                })
            } catch (err) {
                BotOwner.send(err, { code: 'js' })
                message.channel.send(':x: **Error Terdeteksi! Melaporkan Error Ke <@700166055326384179>**')
            }
        }
    }
}