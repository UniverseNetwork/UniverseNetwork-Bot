const ms = require('ms')
module.exports = {
    name: 'mute',
    description: 'This is a mute command',
    execute(message, args) {
        if (message.member.roles.cache.has('794402919897366539')) {
            const target = message.mentions.users.first()
            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.id === '799473003443781704')
                let muteRole = message.guild.roles.cache.find(role => role.id === '765808025289490452')
                let memberTarget = message.guild.members.cache.get(target.id)

                if (!args[1]) {
                    memberTarget.roles.remove(mainRole.id)
                    memberTarget.roles.add(muteRole.id)
                    message.delete().then(message.channel.send(`${target} **telah di mute**`))
                    return
                }

                memberTarget.roles.remove(mainRole.id)
                memberTarget.roles.add(muteRole.id)
                message.delete().then(message.channel.send(`${target} **telah di mute selama ${ms(ms(args[1]))}**`))

                setTimeout(function () {
                    memberTarget.roles.add(mainRole.id)
                    memberTarget.roles.remove(muteRole.id)
                }, ms(args[1]))
            } else {
                message.delete().then(message.channel.send('**Member tidak dapat ditemukan!**'))
            }
        } else {
            message.delete().then(message.channel.send('**Kamu tidak punya izin untuk mengemute member!**'))
        }
    }
}