let { Message } = require('discord.js')
module.exports = {
    name: 'info',
    description: 'To get info from bot or server',
    /**
     * @param {Message} m
     * @param {String[]} a
     */
    async run(m, a) {
        m.delete()
        let { name, id, region, memberCount, ownerID, createdAt } = m.guild, q = a[0], c = require('../Modules/Client'),
            { MessageEmbed } = require('discord.js'), p = await require('../Functions/Handlers').prefix(m), i = process.env.Icon || require('../config.json').Icon
        if (q === 'server') {
            m.channel.send(new MessageEmbed()
                .setColor('#D800FF')
                .setTitle('**Prefix:** `' + p + '`')
                .setAuthor('UniversNetwork', c.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                .setDescription(':clipboard: **Diminta Oleh** <@' + m.author + '>\n\u200B')
                .setThumbnail(m.guild.iconURL({ dynamic: true }))
                .addField('\u200B', '\u200B', true)
                .addField('**Server Info**', '\u200B', true)
                .addField('\u200B', '\u200B', true)
                .addField(':receipt: Nama Server', name, true)
                .addField(':id: Server ID', id, true)
                .addField(':busts_in_silhouette: Total Member', memberCount, true)
                .addField(':date: Dibuat Pada Tanggal', createdAt, true)
                .addField(':earth_asia: Server Region', region, true)
                .addField(':crown: Server Owner', '<@' + ownerID + '>', true)
                .setFooter('Made By ARVIN3108 ID', i));
        } else if (q === 'bot') {
            m.channel.send(new MessageEmbed()
                .setColor('#0080FF')
                .setTitle('**Prefix:** `' + p + '`')
                .setAuthor('UniversNetwork', c.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                .setDescription(':clipboard: **Diminta Oleh** <@' + m.author + '>\n\u200B')
                .setThumbnail(c.user.displayAvatarURL({ dynamic: true }))
                .addField('\u200B', '\u200B', true)
                .addField('**Bot Info**', '\u200B', true)
                .addField('Versi', process.env.Version || require('../config.json').Version)
                .addField('Dicoding Dengan', '[JavaScript](https://www.javascript.com)')
                .addField('Dijalankan Dengan', '[NodeJS](https://nodejs.org)')
                .addField('GitHub Repository', '[GitHub](https://github.com/ARVIN3108/Univers-Network)')
                .addField('DataBase', '[MongoDB](https://mongodb.com)')
                .setFooter('Made By ARVIN3108 ID', i));
        } else return m.channel.send(new MessageEmbed()
            .setAuthor('UniversNetwork', c.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
            .setColor('#15FF02')
            .setTitle('**Prefix:** `' + p + '`')
            .setDescription(':clipboard: **Diminta Oleh** <@' + m.author + '>\n\u200B')
            .addField('\u200B', '\u200B', true)
            .addField('List Of Info Commands', '\u200B', true)
            .addField('\u200B', '\u200B', true)
            .addField(`\`${p}info server\``, 'Untuk Melihat Info Server', true)
            .addField(`\`${p}info bot\``, 'Untuk Melihat Info Bot', true)
            .setFooter('Made By ARVIN3108 ID', i));

    }
}