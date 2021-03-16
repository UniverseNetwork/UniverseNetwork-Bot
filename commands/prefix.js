const { Model } = require('mongoose'),
    { Message, Client } = require('discord.js')

module.exports = {
    name: 'prefix',
    description: 'To set custom prefix',
    /**
     * @param {Message} message 
     * @param {String[]} args
     * @param {Model} prefixSchema
     * @param {Client} client
     */
    async execute(message, args, Bot_Prefix, MessageEmbed, Prefix, prefixSchema, confirmation, Icon, client) {
        message.delete()
        const res = await args.slice(1).join(' '),
            type = args[0]?.toLowerCase();

        if (type === 'set') {
            if (!res) return message.channel.send(':exclamation: **Kamu Perlu Menyertakan Prefix Baru Yang Ingin Diganti!**')
            await message.channel.send(`**Apakah Kamu Yakin Untuk Mengubah Prefix Server Ini Menjadi \`${res}\`?**`).then(async msg => {
                const emoji = await confirmation(msg, message.author, ['✅', '❌'], 10000)
                if (emoji === '✅') {
                    prefixSchema.findOne({ Guild: message.guild.id }, async (err, data) => {
                        if (err) throw err;
                        if (data) {
                            await prefixSchema.findOneAndDelete({ Guild: message.guild.id })
                            data = new prefixSchema({
                                Guild: message.guild.id,
                                Prefix: res
                            })
                            data.save()
                        } else {
                            data = new prefixSchema({
                                Guild: message.guild.id,
                                Prefix: res
                            })
                            data.save()
                        }
                    })
                    msg.reactions.removeAll()
                    msg.edit(`**Prefix Bot Server Ini Telah Diubah Menjadi** \`${res}\``)
                }

                if (emoji === '❌') {
                    msg.reactions.removeAll()
                    msg.edit('**Perubahan Prefix Bot Dibatalkan**')
                }

            })
        } else if (type === 'reset') {
            const data = await prefixSchema.findOne({ Guild: message.guild.id }).catch(e => console.log(e))
            if (data) {
                await message.channel.send(new MessageEmbed()
                    .setColor('#fc0303')
                    .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + '>\n\n**Apakah Kamu Yakin Untuk Mereset Prefix Bot Server Ini?**\n\nKlik Emoji :white_check_mark: Untuk Menyetujui\n\nKlik Emoji :x: Untuk Membatalkan\n\n*Waktumu Untuk Menjawab Hanya 10 Detik!*')
                    .setFooter('Made By ARVIN3108 ID', Icon)).then(async msg => {
                        const emoji = await confirmation(msg, message.author, ['✅', '❌'], 10000)
                        if (emoji === '✅') {
                            await prefixSchema.findOneAndDelete({ Guild: message.guild.id })
                            msg.reactions.removeAll()
                            msg.edit(new MessageEmbed()
                                .setColor('#07fc03')
                                .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                                .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + `>\n\n**Prefix Bot Server Ini Telah Direset Menjadi** \`${Bot_Prefix}\``)
                                .setFooter('Made By ARVIN3108 ID', Icon))
                        }

                        if (emoji === '❌') {
                            msg.reactions.removeAll()
                            msg.edit(new MessageEmbed()
                                .setColor('#f8fc03')
                                .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                                .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + `>\n\n**Perubahan Prefix Bot Dibatalkan`)
                                .setFooter('Made By ARVIN3108 ID', Icon))
                        }
                    })
            } else return message.channel.send(new MessageEmbed()
                .setColor('#fc0303')
                .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                .setTitle('**Prefix:** `' + Prefix + '`')
                .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + '>\n\n**Prefix Bot Server Ini Tidak Pernah Diubah!**')
                .setFooter('Made By ARVIN3108 ID', Icon))
        } else {
            message.channel.send(new MessageEmbed()
                .setTitle('**Prefix:** `' + Prefix + '`')
                .setColor('#ff0000')
                .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + '>\n\u200B')
                .addField('\u200B', '\u200B', true)
                .addField('List Of Prefix Commands', '\u200B', true)
                .addField('\u200B', '\u200B', true)
                .addField(`\`${Prefix}prefix set <Prefix>\``, 'Untuk Mengubah Prefix Bot Server Ini', true)
                .addField('\u200B', '\u200B', true)
                .addField(`\`${Prefix}prefix reset\``, 'Untuk Mereset Prefix Bot Server Ini', true)
                .addField('\u200B\n:memo: Catatan', '**Jika kata berkurung `<>`**\nMaka sifatnya wajib di isi!\n\n**Jika kata berkurung `[]`**\nMaka sifatnya tidak harus di isi!')
                .setFooter('Made By ARVIN3108 ID', Icon)
            )
        }
    }
}