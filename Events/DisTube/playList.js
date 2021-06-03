module.exports = async (m, queue, playlist, song) => {
    const voiceChannel = m.member.voice.channel,
        Prefix = await require('../../Functions/Handlers').prefix(m),
        w = await m.channel.fetchWebhooks(),
        c = require('../../Modules/Client'),
        Icon = process.env.Icon || require('../../config.json').Icon,
        { MessageEmbed } = require('discord.js');
    w.first().send({
        username: `${process.env.BotName || require('../../config.json')['Bot Name']} Song Player`,
        avatarURL: 'https://i.imgur.com/pBmA5S6.png',
        embeds: [new MessageEmbed()
            .setColor('#FBFF00')
            .setAuthor('UniversNetwork', c.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
            .setTitle('**Prefix:** `' + Prefix + '`')
            .setThumbnail('https://yt3.ggpht.com/ytc/AAUvwnhRCS00s226UbsoI2uhe2XFedXEIBw9jaOtstvTo08=s900-c-k-c0x00ffffff-no-rj')
            .setDescription(':clipboard: **Diminta Oleh** <@' + playlist.user + '>\n\u200B')
            .addField('\u200B', '\u200B', true)
            .addField('**Song Player**', '\u200B', true)
            .addField(':white_check_mark: **Terhubung Ke Voice Channel**', voiceChannel.name)
            .addField(':arrow_forward: Sedang Memutar Daftar Lagu', playlist.name)
            .addField(':1234: Jumlah Lagu', playlist.songs.length)
            .addField(':stopwatch: Total Durasi', playlist.formattedDuration)
            .setFooter('Made By ARVIN3108 ID', Icon),
        new MessageEmbed()
            .setColor('#02C2FF')
            .setAuthor('UniversNetwork', c.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
            .setTitle('**Prefix:** `' + Prefix + '`')
            .setThumbnail('https://yt3.ggpht.com/ytc/AAUvwnhRCS00s226UbsoI2uhe2XFedXEIBw9jaOtstvTo08=s900-c-k-c0x00ffffff-no-rj')
            .setDescription(':clipboard: **Diminta Oleh** <@' + song.user + '>\n\u200B')
            .addField('\u200B', '\u200B', true)
            .addField('**Song Player**', '\u200B', true)
            .addField(':white_check_mark: **Terhubung Ke Voice Channel**', voiceChannel.name)
            .addField(':arrow_forward: Sedang Memutar Lagu', song.name)
            .addField(':stopwatch: Durasi', song.formattedDuration)
            .addField(':movie_camera: Link Video', song.url)
            .addField(':information_source: Status', status(queue))
            .setImage(song.thumbnail)
            .setFooter('Made By ARVIN3108 ID', Icon)]
    });
};