let { Interaction } = require('discord.js')
/**
 * @param {Interaction} i 
 * @returns 
 */
module.exports = async (i) => {
    if (i.isButton()) {
        await i.deferUpdate();
        // Import a Function
        let { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js'),
            schema = require('../../Handlers/Schema'),
            I = process.env.Icon || require('../../config.json').Icon,
            g = i.client.guilds.cache.get('761872006513033238'),

            //Ticket Configuration
            buttonID = 'Ticket',
            ts = {
                button: [new MessageActionRow().addComponents(new MessageButton()
                    .setStyle('DANGER')
                    .setLabel('Hapus Transcript')
                    .setEmoji('🗑️')
                    .setCustomId('Delete')
                )]
            },
            ticket = {
                embed: [new MessageEmbed().setColor('RANDOM')
                    .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setTitle('Pesan akan segera dibalas oleh staff.')
                    .setDescription('Klik tombol dibawah ini untuk menutup tiket.')
                    .setFooter('Made By ARVIN3108 ID', I)],
                button: [new MessageActionRow().addComponents(new MessageButton()
                    .setCustomId('Lock').setStyle('DANGER').setEmoji('🔒').setLabel('Tutup Ticket'))],
                schema: { Ticket: i.message.id }
            }, yn = [new MessageActionRow().addComponents(new MessageButton()
                .setCustomId('No')
                .setStyle('DANGER')
                .setEmoji('❌')
                .setLabel('Tidak'),
                new MessageButton()
                    .setCustomId('Yes')
                    .setEmoji('✅')
                    .setStyle('SUCCESS')
                    .setLabel('Ya'))]
        if (i.user.bot) return;
        if (!i.guild) return;
        if (i.customId === buttonID) {
            const data = await schema.ticket.findOne({ Guild: i.guild.id, User: i.user.id, Opened: true }).catch(e => console.log(e));
            if (!data) {
                i.guild.channels.create(`『✅』${i.user.username}`, {
                    type: 'GUILD_TEXT',
                    parent: '830317978750025729',
                    permissionOverwrites: [
                        {
                            id: i.guild.id,
                            deny: ['VIEW_CHANNEL']
                        },
                        {
                            id: i.user.id,
                            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ADD_REACTIONS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS']
                        },
                        {
                            id: '761876701743284234',
                            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ADD_REACTIONS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS']
                        }]
                }).then(channel => {
                    channel.send({ content: `<@${i.user.id}>, Selamat Datang Di Tiketmu!`, embeds: ticket.embed, components: ticket.button }).then(resultMessage => {
                        i.client.guilds.cache.get('846004581372657695').channels.create(`📜┊${i.user.username}┊📑`, {
                            type: 'GUILD_TEXT', parent: '846005890338783292'
                        }).then(transcript => {
                            new schema.ticket({
                                Guild: i.guild.id,
                                Channel: channel.id, Ticket: resultMessage.id, Transcript: transcript.id, User: i.user.id, Opened: true, Status: 0
                            }).save();
                            transcript.send({
                                components: ts.button,
                                embeds: [new MessageEmbed()
                                    .setColor('RANDOM')
                                    .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                                    .setDescription(`**Transcript Ini Terhubung Dengan Ticket** <#${channel.id}>\n\nKlik tombol dibawah ini untuk menghapus transcript.`)
                                    .setFooter('Made By ARVIN3108 ID', I)]
                            }).then(msg => {
                                new schema.transcript({
                                    Guild: '846004581372657695',
                                    Channel: transcript.id,
                                    Ticket: channel.id,
                                    ID: msg.id,
                                    Status: 0
                                }).save();
                            })
                        })
                    })
                })
            }
        }
        const data = await schema.ticket.findOne(ticket.schema).catch(e => console.log(e)),
            transcript = await schema.transcript.findOne({ ID: i.message.id }).catch(e => console.log(e));
        if (!transcript) {
            if (!data) return;
            if (i.customId === 'Lock') {
                if (data.Status === 0) {
                    i.message.edit({
                        components: yn,
                        embeds: [new MessageEmbed()
                            .setColor('RANDOM')
                            .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                            .setTitle('Apakah kamu yakin untuk menutup tiket?')
                            .setDescription('Klik tombol dibawah ini untuk menjawab.')
                            .setFooter('Made By ARVIN3108 ID', I)]
                    })
                    await schema.ticket.findOneAndUpdate(ticket.schema, {
                        Guild: data.Guild,
                        Channel: data.Channel,
                        Ticket: data.Ticket,
                        Transcript: data.Transcript,
                        User: data.User,
                        Opened: data.Opened,
                        Status: 1
                    });
                }
            } else if (i.customId === 'No') {
                if (data.Status === 1) {
                    i.message.edit({ components: ticket.button, embeds: ticket.embed })
                    await schema.ticket.findOneAndUpdate(ticket.schema, {
                        Guild: data.Guild,
                        Channel: data.Channel,
                        Ticket: data.Ticket,
                        Transcript: data.Transcript,
                        User: data.User,
                        Opened: data.Opened,
                        Status: 0
                    });
                } else if (data.Status === 3 || data.Status === 4) {
                    i.message.edit({
                        components: [new MessageActionRow().addComponents(new MessageButton()
                            .setCustomId('Unlock').setStyle('PRIMARY').setEmoji('🔓').setLabel('Buka Tiket Kembali'),
                            new MessageButton().setCustomId('Delete').setStyle('DANGER').setEmoji('🗑️').setLabel('Hapus Tiket'))],
                        embeds: [new MessageEmbed().setColor('RANDOM').setTitle('Tiket telah Ditutup.').setFooter('Made By ARVIN3108 ID', I)
                            .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                            .setDescription('Klik tombol dibawah ini untuk menghapus atau membuka kembali tiket.')]
                    })
                    await schema.ticket.findOneAndUpdate(ticket.schema, {
                        Guild: data.Guild,
                        Channel: data.Channel,
                        Ticket: data.Ticket,
                        Transcript: data.Transcript,
                        User: data.User,
                        Opened: data.Opened,
                        Status: 2
                    });
                }
            } else if (i.customId === 'Yes') {
                if (data.Status === 1) {
                    i.channel.edit({
                        name: `『❌』${i.client.users.cache.get(data.User).username}`,
                        permissionOverwrites: [
                            { id: i.guild.id, deny: ['VIEW_CHANNEL'] },
                            {
                                id: i.user.id,
                                deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ADD_REACTIONS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS']
                            },
                            {
                                id: '761876701743284234',
                                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ADD_REACTIONS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS']
                            }]
                    });
                    i.message.edit({
                        components: [new MessageActionRow().addComponents(new MessageButton()
                            .setCustomId('Unlock')
                            .setStyle('PRIMARY')
                            .setEmoji('🔓')
                            .setLabel('Buka Tiket Kembali'),
                            new MessageButton()
                                .setCustomId('Delete')
                                .setStyle('DANGER')
                                .setEmoji('🗑️')
                                .setLabel('Hapus Tiket'))],
                        embeds: [new MessageEmbed()
                            .setColor('RANDOM').setTitle('Tiket telah Ditutup.').setFooter('Made By ARVIN3108 ID', I)
                            .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                            .setDescription('Klik tombol dibawah ini untuk menghapus atau membuka kembali tiket.')]
                    });
                    await schema.ticket.findOneAndUpdate(ticket.schema, {
                        Guild: data.Guild,
                        Channel: data.Channel,
                        Ticket: data.Ticket,
                        Transcript: data.Transcript,
                        User: data.User,
                        Opened: false,
                        Status: 2
                    })

                } else if (data.Status === 3) {
                    i.channel.edit({
                        name: `『✅』${i.client.users.cache.get(data.User).username}`,
                        permissionOverwrites: [
                            { id: i.guild.id, deny: ['VIEW_CHANNEL'] },
                            {
                                id: i.user.id, deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ADD_REACTIONS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS']
                            },
                            {
                                id: '761876701743284234', allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ADD_REACTIONS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS']
                            }]
                    })
                    i.message.edit({
                        components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('Lock').setStyle('DANGER').setEmoji('🔒')
                            .setLabel('Tutup Ticket'))], embeds: ticket.embed
                    });
                    await schema.ticket.findOneAndUpdate(ticket.schema, {
                        Guild: data.Guild,
                        Channel: data.Channel,
                        Ticket: data.Ticket,
                        Transcript: data.Transcript,
                        User: data.User,
                        Opened: true,
                        Status: 0
                    });
                } else if (data.Status === 4) {
                    i.message.edit({
                        embeds: [new MessageEmbed().setColor('RANDOM').setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                            .setTitle('Tiket akan dihapus dalam 3 detik.').setFooter('Made By ARVIN3108 ID', I)]
                    }); setTimeout(() => i.channel.delete(), 3000);
                    await schema.ticket.findOneAndDelete(ticket.schema);
                }
            } else if (i.customId === 'Unlock') {
                if (data.Status === 2) {
                    i.message.edit({
                        components: yn,
                        embeds: [new MessageEmbed().setColor('RANDOM').setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                            .setTitle('Apakah kamu yakin untuk membuka tiket?').setDescription('Klik tombol dibawah ini untuk menjawab.')
                            .setFooter('Made By ARVIN3108 ID', I)]
                    }); await schema.ticket.findOneAndUpdate(ticket.config, {
                        Guild: data.Guild, Channel: data.Channel, Ticket: data.Ticket, Transcript: data.Transcript, User: data.User, Opened: data.Opened, Status: 3
                    });
                }
            } else if (i.customId === 'Delete') {
                if (data.Status === 2) {
                    i.message.edit({
                        components: yn,
                        embeds: [new MessageEmbed().setColor('RANDOM').setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                            .setTitle('Apakah kamu yakin untuk menghapus tiket?').setDescription('Klik tombol dibawah ini untuk menjawab.')
                            .setFooter('Made By ARVIN3108 ID', I)]
                    }); await schema.ticket.findOneAndUpdate(ticket.schema, {
                        Guild: data.Guild,
                        Channel: data.Channel,
                        Ticket: data.Ticket,
                        Transcript: data.Transcript,
                        User: data.User,
                        Opened: data.Opened,
                        Status: 4
                    });
                }
            }
        } else if (!data) {
            if (!transcript) return;
            const options = { ID: i.message.id };
            if (i.customId === 'Delete') {
                if (transcript.Status === 0) {
                    i.message.edit({
                        components: yn,
                        embeds: [new MessageEmbed().setColor('RANDOM').setFooter('Made By ARVIN3108 ID', I)
                            .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                            .setTitle('Apakah kamu yakin untuk menghapus transcript?').setDescription('Klik tombol dibawah ini untuk menjawab.')]
                    })
                    await schema.transcript.findOneAndUpdate(options, {
                        Guild: transcript.Guild,
                        Channel: transcript.Channel,
                        Ticket: transcript.Ticket,
                        ID: transcript.ID,
                        Status: 1
                    })
                }
            } else if (i.customId === 'No') {
                if (transcript.Status === 1) {
                    i.message.edit({
                        components: [new MessageActionRow().addComponents(new MessageButton()
                            .setCustomId('Delete').setStyle('DANGER').setEmoji('🗑️').setLabel('Hapus Transcript'))],
                        embeds: [new MessageEmbed()
                            .setColor('RANDOM')
                            .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                            .setDescription(`**Transcript Ini Terhubung Dengan Ticket** <#${transcript.Ticket}>\n\nKlik tombol dibawah ini untuk menghapus transcript.`)
                            .setFooter('Made By ARVIN3108 ID', I)]
                    });
                    await schema.transcript.findOneAndUpdate(options, {
                        Guild: transcript.Guild,
                        Channel: transcript.Channel,
                        Ticket: transcript.Ticket,
                        ID: transcript.ID,
                        Status: 0
                    });
                }
            } else if (i.customId === 'Yes') {
                if (transcript.Status === 1) {
                    i.message.edit({
                        compoembeds: [new MessageEmbed()
                            .setColor('RANDOM').setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                            .setTitle('Transcript akan dihapus dalam 3 detik.').setFooter('Made By ARVIN3108 ID', I)]
                    }); setTimeout(() => i.channel.delete(), 3000);
                    await schema.transcript.findOneAndDelete(options);
                }
            }
        }
    }
}
