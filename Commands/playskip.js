module.exports = {
    name: 'playskip', alias: 'ps',
    description: 'Joins, plays a video from youtube, and skip the song',
    async run(m, a, c) {
        m.delete(); let v = m.member.voice.channel, ex = ['Alone', 'Alone pt. II', 'https://www.youtube.com/watch?v=dhYOPzcsbGM'],
            d = require('../Modules/DisTube'), o = { username: `${m.client.guilds.cache.get('761872006513033238').name} Song Player`, avatarURL: 'https://i.imgur.com/pBmA5S6.png' }; i = a.join(" "), w = (await m.channel.fetchWebhooks()).first();
        if (m.member.roles.cache.has('799838913929412640')) {
            if (!i) return w.send({ content: `:exclamation: **Kamu perlu menyertakan nama atau link video!**\nContoh: \`${await require('../Functions/Handlers').prefix(m)}${c} ${ex[Math.floor(Math.random() * ex.length)]}\``, username: o.username, avatarURL: o.avatarURL });
            if (!v) return w.send({ content: ':exclamation: **Kamu perlu berada di voice channel sebelum memutar lagu!**', username: o.username, avatarURL: o.avatarURL });
            d.play(m, i, { skip: true }); w.send({ content: `:mag_right: **Mencari** \`${i}\``, username: o.username, avatarURL: o.avatarURL });
        } else w.send({ content: '**Kamu tidak punya izin!**', username: o.username, avatarURL: o.avatarURL });
    }
}