module.exports = async (m, q, p) => {
    const webhooks = await m.channel.fetchWebhooks(),
        wh = webhooks.first(),
        { MessageEmbed } = require('discord.js');
    wh.send({
        username: `${process.env.BotName || require('../../config.json')['Bot Name']} Song Player`,
        avatarURL: 'https://i.imgur.com/pBmA5S6.png',
        embeds: [new MessageEmbed()
            .setColor('#15FF02')
            .setAuthor('UniversNetwork', require('../../Modules/Client').user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
            .setTitle('**Prefix:** `' + require('../../Functions/Handlers').prefix(m) + '`')
            .setThumbnail('https://yt3.ggpht.com/ytc/AAUvwnhRCS00s226UbsoI2uhe2XFedXEIBw9jaOtstvTo08=s900-c-k-c0x00ffffff-no-rj')
            .setDescription(':clipboard: **Diminta Oleh** <@' + p.user + '>\n\u200B')
            .addField('\u200B', '\u200B', true)
            .addField('**Song Player**', '\u200B', true)
            .addField(':track_next: Menambahkan Daftar Lagu', p.name)
            .addField(':1234: Jumlah Lagu', p.songs.length)
            .addField(':stopwatch: Total Durasi', p.formattedDuration)
            .setFooter('Made By ARVIN3108 ID', process.env.Icon || require('../../config.json').Icon)]
    });
}