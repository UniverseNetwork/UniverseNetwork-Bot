module.exports = {
    name: 'playskip',
    description: 'Joins, plays a video from youtube, and skip the song',
    async run(m, a) {
        m.delete()
        const vc = message.member.voice.channel,
            d = require('../Modules/DisTube'),
            music = a.join(" "),
            o = {
                username: 'UniversNetwork Song Player',
                avatarURL: 'https://i.imgur.com/pBmA5S6.png'
            }, wh = await m.channel.fetchWebhooks(), w = wh.first();
        if (m.member.roles.cache.has('799838913929412640')) {
            if (!music) return w.send(':exclamation: **Kamu perlu menyertakan nama atau link video!**', o);
            if (!vc) return w.send(':exclamation: **Kamu perlu berada di voice channel sebelum memutar lagu!**', o);
            d.playSkip(m, music);
            w.send(':mag_right: **Mencari** `' + music + '`', o);
        } else {
            w.send('**Kamu tidak punya izin!**', o);
        };
    }
}