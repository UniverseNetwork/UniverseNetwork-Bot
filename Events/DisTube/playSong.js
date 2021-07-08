module.exports = async (m, q, s) => {
    let w = await m.channel.fetchWebhooks(), { MessageEmbed } = require('discord.js'), g = require('../../Modules/Client').guilds.cache.get('761872006513033238');
    w.first().send({
        username: `${g.name} Song Player`,
        avatarURL: 'https://i.imgur.com/pBmA5S6.png',
        embeds: [new MessageEmbed()
            .setColor('#02C2FF')
            .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
            // .setTitle('**Prefix:** `' + await require('../../Functions/Handlers').prefix(m) + '`')
            .setThumbnail('https://yt3.ggpht.com/ytc/AAUvwnhRCS00s226UbsoI2uhe2XFedXEIBw9jaOtstvTo08=s900-c-k-c0x00ffffff-no-rj')
            .setDescription(':clipboard: **Diminta Oleh** <@' + s.user + '>\n\u200B')
            .addField('\u200B', '\u200B', true)
            .addField('**Song Player**', '\u200B', true)
            .addField(':white_check_mark: **Terhubung Ke Voice Channel**', `<#${m.member.voice.channel.id}>`)
            .addField(':arrow_forward: Sedang Memutar Lagu', `[${s.name}](${s.url})`)
            .addField(':stopwatch: Durasi', s.formattedDuration)
            .addField(':information_source: Status', `**Volume:** \`${q.volume}%\` **| Repeat:** \`${q.repeatMode ? q.repeatMode == 2 ? "Semua Lagu" : "Hanya Lagu Ini" : "Mati"}\`\n**Acak Lagu:** \`${q.shuffle ? "Hidup" : "Mati"}\` **| Autoplay:** \`${q.autoplay ? "Hidup" : "Mati"}\``)
            .setImage(s.thumbnail)
            .setFooter('Made By ARVIN3108 ID', process.env.Icon || require('../../config.json').Icon)]
    });
}