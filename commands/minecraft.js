const { status, statusBedrock } = require('minecraft-server-util')
module.exports = {
    name: 'minecraft',
    description: 'To Count A Minecraft Server',
    execute(message, args, wh, Prefix, MessageEmbed, cmd, Icon) {
        message.delete()
        const type = args[0],
            ip = args[1],
            options = {
                username: 'UniversNetwork Minecraft Server Detector',
                avatarURL: 'https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg'
            }

        if (type === 'java') {
            if (!ip) return wh.send(':exclamation: **Mohon masukkan ip mineraft server yang benar!**', options)
            const port = args[2] || 25565;
            status(ip, { port: parseInt(port) }).then(result => {
                wh.send({
                    username: options.username,
                    avatarURL: options.avatarURL,
                    embeds: [new MessageEmbed()
                        .setTitle('**Prefix:** `' + Prefix + '`')
                        .setColor('GREEN')
                        .setAuthor('UniversNetwork', 'https://cdn.discordapp.com/app-icons/792994169659981846/eccf642340521c532b0ade8f00591114.png?size=64', 'https://minecraft-mp.com/server-s272254')
                        .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + '>\n\n\u200B')
                        .setThumbnail()
                        .setImage()
                        .addField('IP', ip, true)
                        .addField('\u200B', '\u200B', true)
                        .addField('Port', port, true)
                        .addField('Player Online/Max Player', `${result.onlinePlayers}/${result.maxPlayers}`, true)
                        .addField('\u200B', '\u200B', true)
                        .addField('Versi Server', result.version, true)
                        .setFooter('Made By ARVIN3108 ID', Icon)
                    ]
                })
            })
                .catch(error => {
                    wh.send(':x: **Server tidak dapat ditemukan!**', options);
                    throw error;
                })
        } else if (type === 'bedrock') {
            if (!ip) return wh.send(':exclamation: **Mohon masukkan ip mineraft server yang benar!**', options)
            const port = args[2] || 19132;
            statusBedrock(ip, { port: parseInt(port) }).then(result => {
                wh.send({
                    username: 'UniversNetwork Minecraft Server Detector',
                    avatarURL: 'https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg',
                    embeds: [new MessageEmbed()
                        .setTitle('**Prefix:** `' + Prefix + '`')
                        .setColor('GREEN')
                        .setAuthor('UniversNetwork', 'https://cdn.discordapp.com/app-icons/792994169659981846/eccf642340521c532b0ade8f00591114.png?size=64', 'https://minecraft-mp.com/server-s272254')
                        .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + '>\n\n\u200B')
                        .setThumbnail()
                        .setImage()
                        .addField('IP', ip, true)
                        .addField('\u200B', '\u200B', true)
                        .addField('Port', port, true)
                        .addField('Player Online/Max Player', `${result.onlinePlayers}/${result.maxPlayers}`, true)
                        .addField('\u200B', '\u200B', true)
                        .addField('Versi Server', result.version || 'Latest', true)
                        .setFooter('Made By ARVIN3108 ID', Icon)
                    ]
                })
            })
                .catch(error => {
                    wh.send(':x: **Server tidak dapat ditemukan!**', options);
                    throw error;
                })
        } else return wh.send({
            username: options.username,
            avatarURL: options.avatarURL,
            embeds: [new MessageEmbed()
                .setTitle('**Prefix:** `' + Prefix + '`')
                .setColor('#fbff00')
                .setAuthor('UniversNetwork', 'https://cdn.discordapp.com/app-icons/792994169659981846/eccf642340521c532b0ade8f00591114.png?size=64', 'https://minecraft-mp.com/server-s272254')
                .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + '>\n\u200B\n\u200B')
                .addField('\u200B', '\u200B', true)
                .addField('List Of Minecraft Commands', '\u200B', true)
                .addField('\u200B', '\u200B', true)
                .addField(`\`${Prefix}${cmd} java <ip> [port]\``, 'Untuk Mencari Minecraft Server Java', true)
                .addField('\u200B', '\u200B', true)
                .addField(`\`${Prefix}${cmd} bedrock <ip> [port]\``, 'Untuk Mencari Minecraft Server Bedrock', true)
                .addField('\u200B\n:memo: Catatan', '**Jika kata berkurung `<>`**\nMaka sifatnya wajib di isi!\n\n**Jika kata berkurung `[]`**\nMaka sifatnya tidak harus di isi!')
                .setFooter('Made By ARVIN3108 ID', Icon)
            ]
        })
    }
}