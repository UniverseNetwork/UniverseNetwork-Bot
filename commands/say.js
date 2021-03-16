module.exports = {
    name: 'say',
    description: 'To say the message',
    execute(message, db, client) {
        message.delete()
        if (!message.member.roles.cache.has('800299092197769256')) return message.channel.send(':x: **Kamu Tidak Punya Izin Untuk Mengirim Pesan Sebagai Bot!**')
        db.set('say.toggle', message.author.id, { user: message.author.id })
        message.channel.send('**Ketik pesan yang kamu ingin kirim.**').then(result => {
            db.set('say.id', result.id, { user: message.author.id })
            client.on('message', msg => {
                if (msg.author.bot) return;
                const say_toggle = db.get('say.toggle', { user: message.author.id }),
                    say_id = db.get('say.id', { user: message.author.id })
                if (say_toggle === msg.author.id) {
                    msg.delete()
                    msg.channel.messages.cache.get(say_id).edit(msg.content)
                    db.delete('say.toggle', { user: message.author.id })
                    db.delete('say.id', { user: message.author.id })
                }
            })
        })
    }
}