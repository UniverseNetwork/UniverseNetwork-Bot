let { Message } = require('discord.js')
module.exports = {
    name: 'p',
    alias: 'play',
    description: 'Joins and plays a video from internet',
    /**
     * @param {Message} m 
     * @param {String[]} a
     * @returns 
     */
    async run(m, a, c) {
        m.delete(); let ex = ['Alone', 'Alone pt. II', 'https://www.youtube.com/watch?v=dhYOPzcsbGM'],
            o = {
                username: `${require('../Modules/Client').guilds.cache.get('761872006513033238').name} Song Player`,
                avatarURL: 'https://i.imgur.com/pBmA5S6.png'
            }, w = (await m.channel.fetchWebhooks()).first(), i = a.join(" ");
        if (!i) return w.send({ content: `:exclamation: **Kamu perlu menyertakan nama atau link video!**\nContoh: \`${await require('../Functions/Handlers').prefix(m)}${c} ${ex[Math.floor(Math.random() * ex.length)]}\``, username: o.username, avatarURL: o.avatarURL });
        if (!m.member.voice.channel) return w.send({ content: ':exclamation: **Kamu perlu berada di voice channel sebelum memutar lagu!**', username: o.username, avatarURL: o.avatarURL });
        require('../Modules/DisTube').play(m, i).then(w.send({ content: `:mag_right: **Mencari** \`${i}\``, username: o.username, avatarURL: o.avatarURL }));
    }
};