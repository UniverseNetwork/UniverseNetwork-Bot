module.exports = async (m, q, p) => {
    const webhooks = await m.channel.fetchWebhooks(), { MessageEmbed } = require('discord.js'), c = require('../../Modules/Client')
    wh = webhooks.first(), g = c.guilds.cache.get('761872006513033238');
    wh.send({
        username: `${g.name} Song Player`,
        avatarURL: 'https://i.imgur.com/pBmA5S6.png',
        embeds: [new MessageEmbed()
            .setColor('#15FF02')
            .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
            // .setTitle('**Prefix:** `' + require('../../Functions/Handlers').prefix(m) + '`')
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