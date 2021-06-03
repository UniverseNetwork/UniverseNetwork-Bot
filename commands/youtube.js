let { Message } = require('discord.js')
module.exports = {
    name: 'youtube',
    alias: 'yt',
    /**
     * @param {Message} m
     * @param {String[]} a
     */
    async run(m, a, cmd) {
        m.delete()
        let fetch = require('node-fetch'), wh = await m.channel.fetchWebhooks(), w = wh.first(), c = require('../Modules/Client'), p = await require('../Functions/Handlers').prefix(m), invc = m.member.voice.channel,
            { MessageEmbed } = require('discord.js'), o = { username: 'Univers Network Youtube Together', avatarURL: 'https://images.discordapp.net/avatars/831076177631248404/e63369184dbdcb6100b9cd5434d990ed.png?size=128' }, q;

        if (!invc) {
            if (!a[0] && !m.mentions.channels.first()) return w.send(':exclamation: **Kamu perlu berada pada voice channel sebelum melakukan hal tersebut!**', o);
            if (a[0] && !m.mentions.channels.first()) {
                if (isNaN(a[0]) && !m.mentions.channels.first()) return w.send(':x: **Harap masukkan ID atau mentions!**', o)
                if (!c.channels.cache.get(a[0])) return w.send(':x: **Channel tersebut tidak dapat ditemukan!**', o);
                if (c.channels.cache.get(a[0]).type !== 'voice') return w.send(':x: **Channel tersebut bukan voice channel!**', o);
                q = a[0];
            }
            if (m.mentions.channels.first()) {
                if (m.mentions.channels.first().type !== 'voice') return w.send(':x: **Channel tersebut bukan voice channel!**', o);
                q = m.mentions.channels.first().id;
            }
        };
        if (invc) {
            if (!a[0] && !m.mentions.channels.first()) q = invc.id;
            if (a[0] && !m.mentions.channels.first()) {
                if (!c.channels.cache.get(a[0])) return w.send(':x: **Channel tersebut tidak dapat ditemukan!**', o);
                if (c.channels.cache.get(a[0]).type !== 'voice') return w.send(':x: **Channel tersebut bukan voice channel!**', o);
                q = a[0];
            }
            if (m.mentions.channels.first()) {
                if (m.mentions.channels.first().type !== 'voice') return w.send(':x: **Channel tersebut bukan voice channel!**', o);
                q = m.mentions.channels.first().id;
            };
        };
        fetch(`https://discord.com/api/v8/channels/${q}/invites`, {
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
                username: o.username,
                avatarURL: o.avatarURL,
                embeds: [new MessageEmbed()
                    .setColor('RANDOM')
                    .setAuthor('UniversNetwork', c.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setTitle('**Prefix:** `' + p + '`')
                    .setThumbnail(o.avatarURL)
                    .setDescription(':clipboard: **Diminta Oleh** <@' + m.author + '>\n\u200B')
                    .addField('Klik Nama Channel Dibawah Ini Untuk Bergabung', `[<#${q}>](https://discord.gg/${invite.code})\n\u200B`)
                    .addField(':exclamation: **Peringatan**', 'Fitur ini tidak bekerja pada beberapa perangkat!')
                    .setFooter('Made By ARVIN3108 ID', process.env.Icon || require('../config.json').Icon)]
            }));
    }
}