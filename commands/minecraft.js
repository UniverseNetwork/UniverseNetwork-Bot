module.exports = {
    name: 'minecraft',
    alias: 'mc',
    description: 'To Count A Minecraft Server',
    async execute(m, a, cmd) {
        message.delete()
        let type = a[0], ip = a[1], o = {
            username: 'UniversNetwork Minecraft Server Detector',
            avatarURL: 'https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg'
        }, { status, statusBedrock } = require('minecraft-server-util'), c = require('../Modules/Client'), { MessageEmbed } = require('discord.js'),
            wh = await m.channel.fetchWebhooks(), w = wh.first(), i = process.env.Icon || require('../config.json').Icon, p = require('../Functions/Handlers').prefix(m)

        if (type === 'java') {
            if (!ip) return w.send(':exclamation: **Mohon masukkan ip mineraft server yang benar!**', options)
            let port = a[2] || 25565;
            status(ip, { port: parseInt(port) }).then(r => {
                w.send({
                    username: o.username,
                    avatarURL: o.avatarURL,
                    embeds: [new MessageEmbed()
                        .setTitle('**Prefix:** `' + p + '`')
                        .setColor('GREEN')
                        .setAuthor('UniversNetwork', 'https://cdn.discordapp.com/app-icons/792994169659981846/eccf642340521c532b0ade8f00591114.png?size=64', 'https://minecraft-mp.com/server-s272254')
                        .setDescription(':clipboard: **Diminta Oleh** <@' + m.author + '>\n\n\u200B')
                        .addField('IP', ip, true)
                        .addField('\u200B', '\u200B', true)
                        .addField('Port', port, true)
                        .addField('Player Online/Max Player', `${r.onlinePlayers}/${r.maxPlayers}`, true)
                        .addField('\u200B', '\u200B', true)
                        .addField('Versi Server', r.version, true)
                        .setFooter('Made By ARVIN3108 ID', i)
                    ]
                })
            }).catch(e => {
                w.send(':x: **Server tidak dapat ditemukan!**', o);
                throw e;
            })
        } else if (type === 'bedrock') {
            if (!ip) return w.send(':exclamation: **Mohon masukkan ip mineraft server yang benar!**', o)
            const port = a[2] || 19132;
            statusBedrock(ip, { port: parseInt(port) }).then(r => {
                wh.send({
                    username: 'UniversNetwork Minecraft Server Detector',
                    avatarURL: 'https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg',
                    embeds: [new MessageEmbed()
                        .setTitle('**Prefix:** `' + p + '`')
                        .setColor('GREEN')
                        .setAuthor('UniversNetwork', c.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                        .setDescription(':clipboard: **Diminta Oleh** <@' + m.author + '>\n\n\u200B')
                        .addField('IP', ip, true)
                        .addField('\u200B', '\u200B', true)
                        .addField('Port', port, true)
                        .addField('Player Online/Max Player', `${r.onlinePlayers}/${r.maxPlayers}`, true)
                        .addField('\u200B', '\u200B', true)
                        .addField('Versi Server', r.version || 'Latest', true)
                        .setFooter('Made By ARVIN3108 ID', i)
                    ]
                })
            })
                .catch(e => {
                    wh.send(':x: **Server tidak dapat ditemukan!**', o);
                    throw e;
                })
        } else return w.send({
            username: o.username,
            avatarURL: o.avatarURL,
            embeds: [new MessageEmbed()
                .setTitle('**Prefix:** `' + p + '`')
                .setColor('#fbff00')
                .setAuthor('UniversNetwork', c.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                .setDescription(':clipboard: **Diminta Oleh** <@' + m.author + '>\n\u200B\n\u200B')
                .addField('\u200B', '\u200B', true)
                .addField('List Of Minecraft Commands', '\u200B', true)
                .addField('\u200B', '\u200B', true)
                .addField(`\`${p}${cmd} java <ip> [port]\``, 'Untuk Mencari Minecraft Server Java', true)
                .addField('\u200B', '\u200B', true)
                .addField(`\`${p}${cmd} bedrock <ip> [port]\``, 'Untuk Mencari Minecraft Server Bedrock', true)
                .addField('\u200B\n:memo: Catatan', '**Jika kata berkurung `<>`**\nMaka sifatnya wajib di isi!\n\n**Jika kata berkurung `[]`**\nMaka sifatnya tidak harus di isi!')
                .setFooter('Made By ARVIN3108 ID', i)
            ]
        })
    }
}