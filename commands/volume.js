module.exports = {
    name: 'volume',
    alias: 'vol',
    description: 'To change the volume',
    async run(m, a) {
        m.delete()
        let d = require('../Modules/DisTube'), q = await d.getQueue(m), o = {
                username: 'Univers Network Song Player',
                avatarURL: 'https://i.imgur.com/pBmA5S6.png'
            }, { MessageEmbed } = require('discord.js'),
            wh = await m.channel.fetchWebhooks(), w = wh.first();
        if (!m.member.roles.cache.has('800297876080033813')) return w.send(':x: **Kamu Tidak Punya Izin Untuk Mengubah Volume Suara Bot!**', options);
        if (q) {
            if (!a[0]) return w.send('**Salah ketik! Seharusnya: *.volume <angka>***', o);
            if (isNaN(a[0])) return w.send('**Mohon masukkan angka yang benar!**', o);
            if (a[0] < 0) return w.send('**Kamu tidak bisa mengubah volume suara dibawah 0!**', o);
            d.setVolume(m, a[0]).then(w.send({
                username: options.username,
                avatarURL: options.avatarURL,
                embeds: [new MessageEmbed()
                    .setTitle('**Prefix:** `' + await require('../Functions/Handlers').prefix(m) + '`')
                    .setColor('#FBFF00')
                    .setAuthor('UniversNetwork', require('../Modules/Client').user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setDescription(':clipboard: **Diminta Oleh** <@' + m.author + '>\n\u200B')
                    .addField('\u200B', '\u200B', true)
                    .addField('**Song Player**', '\u200B', true)
                    .addField(':loud_sound: Mengubah Volume Suara Menjadi `' + a[0] + '`', '\u200B')
                    .setFooter('Made By ARVIN3108 ID', process.env.Icon || require('../config.json').Icon)]
            }));
        } else if (!q) w.send(':x: **Bot tidak sedang memutar lagu!**', o);

    }
};