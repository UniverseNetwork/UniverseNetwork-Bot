module.exports = {
    name: 'p',
    alias: 'play',
    description: 'Joins and plays a video from youtube',
    async run(m, a, c) {
        m.delete();
        let ex = ['Alone', 'Alone pt. II', 'https://www.youtube.com/watch?v=dhYOPzcsbGM'],
            music = a.join(" "),
            o = {
                username: `${require('../Modules/Client').guilds.cache.get('761872006513033238').name} Song Player`,
                avatarURL: 'https://i.imgur.com/pBmA5S6.png'
            }, wh = await m.channel.fetchWebhooks(), w = wh.first();
        if (!music) return w.send(`:exclamation: **Kamu perlu menyertakan nama atau link video!**\nContoh: \`${await require('../Functions/Handlers').prefix(m)}${c} ${ex[Math.floor(Math.random() * ex.length)]}\``, o);
        if (!m.member.voice.channel) return w.send(':exclamation: **Kamu perlu berada di voice channel sebelum memutar lagu!**', o);
        require('../Modules/DisTube').play(m, music).then(w.send(':mag_right: **Mencari** `' + music + '`', o));
    }
};