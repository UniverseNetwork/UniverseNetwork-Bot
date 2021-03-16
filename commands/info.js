module.exports = {
    name: 'info',
    description: 'To get info from bot or server',
    execute(message, args, MessageEmbed, Version, Prefix, Icon, client) {
        message.delete()
        const { guild } = message,
            { name, id, region, memberCount, ownerID, createdAt } = guild;
        if (args[0] === 'server') {
            message.channel.send(new MessageEmbed()
                .setColor('#D800FF')
                .setTitle('**Prefix:** `' + Prefix + '`')
                .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + '>\n\u200B')
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .addField('\u200B', '\u200B', true)
                .addField('**Server Info**', '\u200B', true)
                .addField('\u200B', '\u200B', true)
                .addField(':receipt: Nama Server', name, true)
                .addField(':id: Server ID', id, true)
                .addField(':busts_in_silhouette: Total Member', memberCount, true)
                .addField(':date: Dibuat Pada Tanggal', createdAt, true)
                .addField(':earth_asia: Server Region', region, true)
                .addField(':crown: Server Owner', '<@' + ownerID + '>', true)
                .setFooter('Made By ARVIN3108 ID', Icon));
        } else if (args[0] === 'bot') {
            message.channel.send(new MessageEmbed()
                .setColor('#0080FF')
                .setTitle('**Prefix:** `' + Prefix + '`')
                .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + '>\n\u200B')
                .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
                .addField('\u200B', '\u200B', true)
                .addField('**Bot Info**', '\u200B', true)
                .addField('\u200B', '\u200B', true)
                .addField('Versi', Version)
                .addField('Dicoding Dengan', '[JavaScript](https://www.javascript.com)')
                .addField('Dijalankan Dengan', '[NodeJS](https://nodejs.org)')
                .setFooter('Made By ARVIN3108 ID', Icon));
        } else return message.channel.send(new MessageEmbed()
            .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
            .setColor('#15FF02')
            .setTitle('**Prefix:** `' + Prefix + '`')
            .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + '>\n\u200B')
            .addField('\u200B', '\u200B', true)
            .addField('List Of Info Commands', '\u200B', true)
            .addField('\u200B', '\u200B', true)
            .addField(`\`${Prefix}info server\``, 'Untuk Melihat Info Server', true)
            .addField(`\`${Prefix}info bot\``, 'Untuk Melihat Info Bot', true)
            .setFooter('Made By ARVIN3108 ID', Icon));

    }
}