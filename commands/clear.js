module.exports = {
    name: 'clear',
    description: 'This is a clear command',
    async execute(message, args) {
        await message.delete()
        if (message.member.permissions.has('MANAGE_MESSAGES')) {
            if (!args[0]) return message.delete().then(message.channel.send('**Salah ketik! Seharusnya: *.clear <angka>***'))
            if (isNaN(args[0])) return message.delete().then(message.channel.send('**Mohon masukkan angka yang benar!**'))
            if (args[0] < 1) return message.delete().then(message.channel.send('**Kamu tidak bisa menghapus pesan dengan jumlah dibawah 1!**'))
            if (args[0] > 100) return message.delete().then(message.channel.send('**Kamu tidak bisa menghapus pesan dengan jumlah diatas 100!**'))
            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages).then(message.channel.send(`**Berhasil menghapus ${args[0]} pesan!**`).then(msg => {
                    msg.delete({ timeout: 3000 })
                }))
            })
        } else {
            message.channel.send('**Kamu tidak punya izin untuk menghapus pesan!**')
        }
    }
}