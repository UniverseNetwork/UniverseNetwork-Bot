module.exports = {
    name: 'ban',
    description: 'This is a ban command',
    execute(message, args) {
        if (message.member.permissions.has('BAN_MEMBERS')) {
            const member = message.mentions.users.first()
            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id)
                memberTarget.ban()
                message.delete().then(message.channel.send(`${memberTarget} **telah di ban**`))
            } else {
                message.delete().then(message.channel.send('**Member tidak valid atau tidak bisa di ban!**'))
            }
        } else {
            message.delete().then(message.channel.send('**Kamu tidak punya izin untuk meng-ban member!**'))
        }
    }
}