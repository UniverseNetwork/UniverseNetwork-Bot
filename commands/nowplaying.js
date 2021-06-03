module.exports = {
    name: 'nowplaying',
    alias: 'np',
    async run(m) {
        m.delete()
        let q = await require('../Modules/DisTube').getQueue(m), { MessageEmbed } = require('discord.js'),
            wh = await m.channel.fetchWebhooks(), w = wh.first(), o = { username: 'UniversNetwork Song Player', avatarURL: 'https://i.imgur.com/pBmA5S6.png' }
        if (q) {
            w.send({
                username: o.username,
                avatarURL: o.avatarURL,
                embeds: [new MessageEmbed()
                    .setColor('#02C2FF')
                    .setAuthor('UniversNetwork', require('../Modules/Client').user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setTitle('**Prefix:** `' + await require('../Functions/Handlers').prefix(m) + '`')
                    .setThumbnail('https://yt3.ggpht.com/ytc/AAUvwnhRCS00s226UbsoI2uhe2XFedXEIBw9jaOtstvTo08=s900-c-k-c0x00ffffff-no-rj')
                    .setDescription(':clipboard: **Diminta Oleh** <@' + m.author + '>\n\u200B')
                    .addField('\u200B', '\u200B', true)
                    .addField('**Song Player**', '\u200B', true)
                    .addField(':white_check_mark: **Terhubung Ke Voice Channel**', `<#${q.initMessage.member.voice.channel.id}>`)
                    .addField(':arrow_forward: Sedang Memutar Lagu', `[${q.songs[0].name}](${q.songs[0].url})`)
                    .addField(':stopwatch: Durasi', `\`${q.formattedCurrentTime} / ${q.songs[0].formattedDuration}\``)
                    .addField(':information_source: Status', `**Volume:** \`${q.volume}%\` **| Repeat:** \`${q.repeatMode ? q.repeatMode == 2 ? "Semua Lagu" : "Hanya Lagu Ini" : "Mati"}\`\n**Acak Lagu:** \`${q.shuffle ? "Hidup" : "Mati"}\` **| Autoplay:** \`${q.autoplay ? "Hidup" : "Mati"}\``)
                    .setImage(q.songs[0].thumbnail)
                    .setFooter('Made By ARVIN3108 ID', process.env.Icon || require('../config.json').Icon)]
            });
        } else if (!q) w.send(':x: **Bot tidak sedang memutar lagu!**', o);
    }
}