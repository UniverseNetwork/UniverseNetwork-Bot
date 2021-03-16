module.exports = {
    name: 'announcement',
    description: 'To announce a information',
    execute(message, args, client) {
        message.delete();
        if (!message.member.roles.cache.has('803430075872706610')) return message.channel.send(':x: **Kamu Tidak Punya Izin Untuk Mengirim Pengumuman di <#761872007116750852>!**')
        const result = args.join(' '),
            ch = client.channels.cache.get('761872007116750852');
        if (!result) return message.channel.send(':exclamation: **Kamu perlu menyertakan kalimat yang akan diumumkan!**');
        if (message.guild.id != '761872006513033238') return;
        ch.send(result)
    }
}