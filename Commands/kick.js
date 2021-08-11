module.exports = {
    name: 'kick',
    description: 'This is a kick command',
    execute(message, args) {
        if (message.member.permissions.has('KICK_MEMBERS')) {
            const member = message.mentions.users.first()
            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id)
                memberTarget.kick()
                message.delete().then(message.channel.send(`${memberTarget} **telah di kick**`))
            } else {
                message.delete().then(message.channel.send('**Member tidak valid atau tidak bisa di kick!**'))
            }
        } else {
            message.delete().then(message.channel.send('**Kamu tidak punya izin untuk meng-kick member!**'))
        }
    }
}