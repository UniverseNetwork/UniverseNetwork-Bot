module.exports = {
    name: 'unmute',
    description: 'This is a unmute command',
    execute(message, args) {
        if (message.member.roles.cache.has('794402919897366539')) {
            const target = message.mentions.users.first()
            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.id === '799473003443781704')
                let muteRole = message.guild.roles.cache.find(role => role.id === '765808025289490452')
                let memberTarget = message.guild.members.cache.get(target.id)

                memberTarget.roles.add(mainRole.id)
                memberTarget.roles.remove(muteRole.id)

                message.delete().then(message.channel.send(`${target} **telah di unmute**`))
            } else {
                message.delete().then(message.channel.send('**Member tidak dapat ditemukan!**'))
            }
        } else {
            message.delete().then(message.channel.send('**Kamu tidak punya izin untuk meng-unmute member!**'))
        }
    }
}