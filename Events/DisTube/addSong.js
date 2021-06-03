module.exports = async (m, q, s) => {
    let w = await m.channel.fetchWebhooks(),
        { MessageEmbed } = require('discord.js');
    w.first().send({
        username: `${process.env.BotName || require('../../config.json')['Bot Name']} Song Player`,
        avatarURL: 'https://i.imgur.com/pBmA5S6.png',
        embeds: [new MessageEmbed()
            .setColor('#15FF02')
            .setAuthor('UniversNetwork', require('../../Modules/Client').user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
            .setTitle('**Prefix:** `' + await require('../../Functions/Handlers').prefix(m) + '`')
            .setThumbnail('https://yt3.ggpht.com/ytc/AAUvwnhRCS00s226UbsoI2uhe2XFedXEIBw9jaOtstvTo08=s900-c-k-c0x00ffffff-no-rj')
            .setDescription(':clipboard: **Diminta Oleh** <@' + s.user + '>\n\u200B')
            .addField('\u200B', '\u200B', true).addField('**Song Player**', '\u200B', true)
            .addField(':track_next: Menambahkan Lagu', `[${s.name}](${s.url})`)
            .addField(':stopwatch: Durasi', s.formattedDuration).setImage(s.thumbnail)
            .setFooter('Made By ARVIN3108 ID', process.env.Icon || require('../../config.json').Icon)]
    });
};