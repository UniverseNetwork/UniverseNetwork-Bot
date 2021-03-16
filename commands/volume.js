module.exports = {
    name: 'volume',
    description: 'To change the volume',
    async execute(message, args, distube, MessageEmbed, Prefix, wh, Icon, client) {
        message.delete()
        if (!message.member.roles.cache.has('800297876080033813')) return wh.send(':x: **Kamu Tidak Punya Izin Untuk Mengubah Volume Suara Bot!**', options)
        let queue = await distube.getQueue(message),
            options = {
                username: 'UniversNetwork Song Player',
                avatarURL: 'https://i.imgur.com/pBmA5S6.png'
            }

        if (queue) {
            if (!args[0]) return wh.send('**Salah ketik! Seharusnya: *.volume <angka>***', options)

            if (isNaN(args[0])) return wh.send('**Mohon masukkan angka yang benar!**', options)

            if (args[0] < 0) return wh.send('**Kamu tidak bisa mengubah volume suara dibawah 0!**', options)

            distube.setVolume(message, args[0]).then(wh.send({
                username: options.username,
                avatarURL: options.avatarURL,
                embeds: [new MessageEmbed()
                    .setTitle('**Prefix:** `' + Prefix + '`')
                    .setColor('#FBFF00')
                    .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + '>\n\n\u200B')
                    .addField(':loud_sound: Mengubah Volume Suara Menjadi `' + args[0] + '`', '\u200B')
                    .setFooter('Made By ARVIN3108 ID', Icon)]
            }))

        } else if (!queue) {
            wh.send(':x: **Bot tidak sedang memutar lagu!**', options)
        }
    }
}