let { Message } = require('discord.js')
module.exports = {
    name: 'youtube',
    alias: 'yt',
    /**
     * @param {Message} m
     * @param {String[]} a
     */
    async run(m, a, cmd) {
        m.delete();
        let c = require('../Modules/Client'),
            o = { username: `${c.guilds.cache.get('761872006513033238').name} Youtube Together`, avatarURL: 'https://images.discordapp.net/avatars/831076177631248404/e63369184dbdcb6100b9cd5434d990ed.png?size=128' },
            g = c.guilds.cache.get('761872006513033238'), w = (await m.channel.fetchWebhooks()).first(),
            invc = m.member.voice.channel, q,
            { MessageEmbed } = require('discord.js');
        if (!invc) {
            if (!a[0] && !m.mentions.channels.first()) return w.send({ content: ':exclamation: **Kamu perlu berada pada voice channel sebelum melakukan hal tersebut!**', username: o.username, avatarURL: o.avatarURL });
            if (a[0] && !m.mentions.channels.first()) {
                if (isNaN(a[0]) && !m.mentions.channels.first()) return w.send({ content: ':x: **Harap masukkan ID atau mention!**', username: o.username, avatarURL: o.avatarURL })
                if (!c.channels.cache.get(a[0])) return w.send({ content: ':x: **Channel tersebut tidak dapat ditemukan!**', username: o.username, avatarURL: o.avatarURL });
                if (c.channels.cache.get(a[0]).type !== 'GUILD_VOICE') return w.send({ content: ':x: **Channel tersebut bukan voice channel!**', username: o.username, avatarURL: o.avatarURL });
                q = a[0];
            }
            if (m.mentions.channels.first()) {
                if (m.mentions.channels.first().type !== 'GUILD_VOICE') return w.send({ content: ':x: **Channel tersebut bukan voice channel!**', username: o.username, avatarURL: o.avatarURL });
                q = m.mentions.channels.first().id;
            }
        };
        if (invc) {
            if (!a[0] && !m.mentions.channels.first()) q = invc.id;
            if (a[0] && !m.mentions.channels.first()) {
                if (!c.channels.cache.get(a[0])) return w.send({ content: ':x: **Channel tersebut tidak dapat ditemukan!**', username: o.username, avatarURL: o.avatarURL });
                if (c.channels.cache.get(a[0]).type !== 'GUILD_VOICE') return w.send({ content: ':x: **Channel tersebut bukan voice channel!**', username: o.username, avatarURL: o.avatarURL });
                q = a[0];
            }
            if (m.mentions.channels.first()) {
                if (m.mentions.channels.first().type !== 'GUILD_VOICE') return w.send({ content: ':x: **Channel tersebut bukan voice channel!**', username: o.username, avatarURL: o.avatarURL });
                q = m.mentions.channels.first().id;
            };
        };
        require('node-fetch')(`https://discord.com/api/v8/channels/${q}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755600276941176913",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${require('../Modules/Client').token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => w.send({
                username: o.username, avatarURL: o.avatarURL, embeds: [new MessageEmbed()
                    .setColor('RANDOM')
                    .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setThumbnail(o.avatarURL)
                    .setDescription(`:clipboard: **Diminta Oleh** ${m.author}\n\u200B`)
                    .addField('Klik Nama Channel Dibawah Ini Untuk Bergabung', `[<#${q}>](https://discord.gg/${invite.code})\n\u200B`)
                    .addField(':exclamation: **Peringatan**', 'Fitur ini tidak bekerja pada beberapa perangkat!')
                    .setFooter('Made By ARVIN3108 ID', process.env.Icon || require('../config.json').Icon)]
            }));
    }
}