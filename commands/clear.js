module.exports = {
    name: 'clear',
    description: 'This is a clear command',
    async run(m, a) {
        await m.delete()
        if (m.member.permissions.has('MANAGE_MESSAGES')) {
            if (!a[0]) return m.channel.send('**Salah ketik! Seharusnya: *.clear <angka>***');
            if (isNaN(a[0])) return m.channel.send('**Mohon masukkan angka yang benar!**');
            if (a[0] < 1) return m.channel.send('**Kamu tidak bisa menghapus pesan dengan jumlah dibawah 1!**');
            if (a[0] > 100) return m.channel.send('**Kamu tidak bisa menghapus pesan dengan jumlah diatas 100!**');
            await m.channel.messages.fetch({ limit: a[0] }).then(messages => {
                m.channel.bulkDelete(messages).then(m.channel.send(`**Berhasil menghapus ${a[0]} pesan!**`).then(msg => {
                    msg.delete({ timeout: 3000 })
                }))
            })
        } else {
            m.channel.send(':x: **Kamu tidak punya izin untuk menghapus pesan!**')
        }
    }
}