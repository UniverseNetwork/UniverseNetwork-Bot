module.exports = {
    name: 'verification',
    description: "Sets up a reaction role message!",
    async execute(message, MessageEmbed, client) {
        const channel = message.channel.id
        if (message.member.hasPermission('MANAGE_ROLES')) {
            const verificationRole = message.guild.roles.cache.find(role => role.id === "761876904465661962"),
                unmuteRole = message.guild.roles.cache.find(role => role.id === "799473003443781704"),
                verificationEmoji = '✅'

            let embed = new MessageEmbed()
                .setColor('#F3FF00')
                .setAuthor('UniversNetwork', 'https://cdn.discordapp.com/app-icons/792994169659981846/eccf642340521c532b0ade8f00591114.png?size=64', 'https://minecraft-mp.com/server-s272254')
                .setTitle('Halo Verifikasi Dulu Ya')
                .addField(':flag_id:', 'Pencet Emoji :white_check_mark: Untuk Verifikasi')
                .addField(':flag_um:', 'Click Emoji :white_check_mark: For Verification')
                .setFooter('Made By ARVIN3108 ID', 'https://cdn.discordapp.com/avatars/700166055326384179/3ec8287199dc402fe6a587902e300749.png?size=64')


            let messageEmbed = await message.channel.send(embed)
            message.delete().then(messageEmbed.react(verificationEmoji))

            client.on('messageReactionAdd', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;

                if (reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === verificationEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(verificationRole);
                        await reaction.message.guild.members.cache.get(user.id).roles.add(unmuteRole)
                        await messageEmbed.reactions.removeAll()
                        await messageEmbed.react(verificationEmoji)
                    }
                } else {
                    return;
                }

            });
        } else {
            message.delete().then(message.channel.send(':x: Kamu tidak punya izin!'))
        }
    }
}