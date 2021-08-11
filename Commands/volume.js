module.exports = {
    name: 'volume',
    alias: 'vol',
    description: 'To change the volume',
    async run(m, a) {
        m.delete()
        let d = require('../Modules/DisTube'), q = await d.getQueue(m), ////o = {
            ////username: 'Univers Network Song Player',
            ////avatarURL: 'https://i.imgur.com/pBmA5S6.png'},
            g = m.client.guilds.cache.get('761872006513033238'),
            { MessageEmbed } = require('discord.js');
        if (!m.member.roles.cache.has('800297876080033813')) return m.channel.send({content: ':x: **Kamu Tidak Punya Izin Untuk Mengubah Volume Suara Bot!**'});
        if (q) {
            if (!a[0]) return m.channel.send({content: `**Salah ketik! Seharusnya: *${await require('../Functions/Handlers').prefix(m)}volume <angka>***`});
            if (isNaN(a[0])) return m.channel.send({content: '**Mohon masukkan angka yang benar!**'});
            if (a[0] < 0) return m.channel.send({content: '**Kamu tidak bisa mengubah volume suara dibawah 0!**'});
            d.setVolume(m, a[0]).then(m.channel.send({
                embeds: [new MessageEmbed()
                    .setColor('#FBFF00')
                    .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setDescription(`:clipboard: **Diminta Oleh** ${m.author}\n\u200B`)
                    .addField('\u200B', '\u200B', true)
                    .addField('**Song Player**', '\u200B', true)
                    .addField(':loud_sound: Mengubah Volume Suara Menjadi `' + a[0] + '`', '\u200B')
                    .setFooter('Made By ARVIN3108 ID', process.env.Icon || require('../config.json').Icon)]
            }));
        } else if (!q) m.channel.send({content: ':x: **Bot tidak sedang memutar lagu!**'});

    }
};