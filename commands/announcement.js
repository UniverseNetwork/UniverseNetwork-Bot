let { Message } = require('discord.js')
module.exports = {
    name: 'announcement',
    alias: 'say',
    /**
     * 
     * @param {Message} m 
     * @param {String[]} a 
     * @returns 
     */
    async run(m, a, cmd) {
        m.delete();
        if (!m.member.roles.cache.has('803430075872706610')) return m.channel.send(':x: **Kamu Tidak Punya Izin Untuk Mengirim Pengumuman di <#761872007116750852>!**')
        let ch = m.mentions.channels.first()
        if (!ch) return m.channel.send(`:exclamation: **Kamu perlu menyertakan channel yang dimaksud!**\nContoh: \`${await require('../Functions/Handlers').prefix(m)}${cmd} ${m.channel.toString()}\``);
        if (m.guild.id != '761872006513033238') return;
        ch.send(result)
    }
}