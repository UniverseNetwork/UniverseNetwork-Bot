let { Message } = require('discord.js')
module.exports = {
    name: 'changelogs',
    alias: 'update',
    /**
     * 
     * @param {Message} m 
     * @param {String[]} a 
     * @param {String} cmd 
     */
    run(m, a, cmd) {
        if (m.author.id !== '700166055326384179') return;
        m.delete();
        let i = a.slice(1).join(' '),
            c = m.mentions.channels.first();
        if (!c) return m.channel.send(':exclamation: **Kamu perlu menyertakan channel yang ingin di umumkan!**');
        if (!i) return m.channel.send(':exclamation: **Kamu perlu menyertakan versi yang ingin diumumkan!**');
        m.mentions.channels.first().send(require(`../Changelogs/${a.slice(1).join(' ')}.json`).join('\n'));
    }
}