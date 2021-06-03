let c = require('../../Modules/Client'),
    { MessageEmbed } = require('discord.js'),
    schema = require('../../Handlers/Schema'),
    Icon = process.env.Icon || require('../../config.json').Icon,
    botName = require('../../config.json')['Bot Name'];
module.exports = async (r, u) => {
    const mainchannel = '847999360935657472',
        ticket = {
            emoji: '📩',
            embed: new MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(botName, c.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                .setTitle('Pesan akan segera dibalas oleh staff.')
                .setDescription('Klik emoji :lock: untuk menutup tiket.')
                .setFooter('Made By ARVIN3108 ID', Icon),
            config: {
                Ticket: r.message.id
            },
        };
    if (u.bot) return;
    if (!r.message.guild) return;
    if (r.message.channel.id === mainchannel) {
        if (r.emoji.name === ticket.emoji) {
            const data = await schema.ticket.findOne({
                Guild: r.message.guild.id,
                User: u.id,
                Opened: true
            }).catch(e => console.log(e));
            r.users.remove(u);
            if (!data) {
                r.message.guild.channels.create(`📜┊${u.username}┊✅`, {
                    type: 'text',
                    parent: '830317978750025729',
                    permissionOverwrites: [
                        {
                            id: r.message.guild.id,
                            deny: ['VIEW_CHANNEL']
                        },
                        {
                            id: u.id,
                            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ADD_REACTIONS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS']
                        },
                        {
                            id: '761876701743284234',
                            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ADD_REACTIONS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS']
                        }
                    ]
                }).then(channel => {
                    channel.send(`<@${u.id}>, Selamat Datang Di Tiketmu!`, ticket.embed).then(resultMessage => {
                        resultMessage.react('🔒');
                        c.guilds.cache.get('846004581372657695').channels.create(`📜┊${u.username}┊📑`, {
                            type: 'text',
                            parent: '846005890338783292'
                        }).then(transcript => {
                            new schema.ticket({
                                Guild: r.message.guild.id,
                                Channel: channel.id,
                                Ticket: resultMessage.id,
                                Transcript: transcript.id,
                                User: u.id,
                                Opened: true,
                                Status: 0
                            }).save();
                            transcript.send(new MessageEmbed()
                                .setColor('RANDOM')
                                .setAuthor(botName, c.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                                .setDescription(`**Transcript Ini Terhubung Dengan Ticket** <#${channel.id}>\n\nKlik emoji :no_entry: untuk menghapus transcript.`)
                                .setFooter('Made By ARVIN3108 ID', Icon)).then(msg => {
                                    msg.react('⛔');
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
    }
    const data = await schema.ticket.findOne(ticket.config).catch(e => console.log(e)),
        transcript = await schema.transcript.findOne({ ID: r.message.id }).catch(e => console.log(e));
    if (!transcript) {
        if (!data) return;
        if (r.emoji.name === '🔒') {
            if (data.Status === 0) {
                r.message.reactions.removeAll();
                r.message.edit(new MessageEmbed()
                    .setColor('RANDOM')
                    .setAuthor(botName, c.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setTitle('Apakah kamu yakin untuk menutup tiket?')
                    .setDescription('Klik emoji :x: untuk membatalkan.\n\nKlik emoji :white_check_mark: untuk menutup tiket.')
                    .setFooter('Made By ARVIN3108 ID', Icon));
                r.message.react('❌');
                r.message.react('✅');
                await schema.ticket.findOneAndUpdate(ticket.config, {
                    Guild: data.Guild,
                    Channel: data.Channel,
                    Ticket: data.Ticket,
                    Transcript: data.Transcript,
                    User: data.User,
                    Opened: data.Opened,
                    Status: 1
                });
            }
        } else if (r.emoji.name === '❌') {
            if (data.Status === 1) {
                r.message.reactions.removeAll();
                r.message.edit(ticket.embed);
                r.message.react('🔒');
                await schema.ticket.findOneAndUpdate(ticket.config, {
                    Guild: data.Guild,
                    Channel: data.Channel,
                    Ticket: data.Ticket,
                    Transcript: data.Transcript,
                    User: data.User,
                    Opened: data.Opened,
                    Status: 0
                });
            } else if (data.Status === 3) {
                r.message.reactions.removeAll();
                r.message.react('🔓');
                r.message.react('⛔');
                r.message.edit(new MessageEmbed()
                    .setColor('RANDOM')
                    .setAuthor(botName, c.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setTitle('Tiket telah Ditutup.')
                    .setDescription('Klik emoji :unlock: untuk membuka kembali tiket.\n\nKlik emoji :no_entry: untuk tiket.')
                    .setFooter('Made By ARVIN3108 ID', Icon));
                await schema.ticket.findOneAndUpdate(ticket.config, {
                    Guild: data.Guild,
                    Channel: data.Channel,
                    Ticket: data.Ticket,
                    Transcript: data.Transcript,
                    User: data.User,
                    Opened: data.Opened,
                    Status: 2
                });
            } else if (data.Status === 4) {
                r.message.reactions.removeAll();
                r.message.react('🔓');
                r.message.react('⛔');
                r.message.edit(new MessageEmbed()
                    .setColor('RANDOM')
                    .setAuthor(botName, c.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setTitle('Tiket telah Ditutup.')
                    .setDescription('Klik emoji :unlock: untuk membuka kembali tiket.\n\nKlik emoji :no_entry: untuk menghapus tiket.')
                    .setFooter('Made By ARVIN3108 ID', Icon));
                await schema.ticket.findOneAndUpdate(ticket.config, {
                    Guild: data.Guild,
                    Channel: data.Channel,
                    Ticket: data.Ticket,
                    Transcript: data.Transcript,
                    User: data.User,
                    Opened: data.Opened,
                    Status: 2
                });

            }
        } else if (r.emoji.name === '✅') {
            if (data.Status === 1) {
                r.message.reactions.removeAll();
                r.message.channel.updateOverwrite(data.User, { 'VIEW_CHANNEL': false })
                r.message.channel.setName(`📜┊${c.users.cache.get(data.User).username}┊❌`);
                r.message.react('🔓');
                r.message.react('⛔');
                r.message.edit(new MessageEmbed()
                    .setColor('RANDOM')
                    .setAuthor(botName, c.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setTitle('Tiket telah Ditutup.')
                    .setDescription('Klik emoji :unlock: untuk membuka kembali tiket.\n\nKlik emoji :no_entry: untuk menghapus tiket.')
                    .setFooter('Made By ARVIN3108 ID', Icon))
                await schema.ticket.findOneAndUpdate(ticket.config, {
                    Guild: data.Guild,
                    Channel: data.Channel,
                    Ticket: data.Ticket,
                    Transcript: data.Transcript,
                    User: data.User,
                    Opened: false,
                    Status: 2
                })

            } else if (data.Status === 3) {
                r.message.reactions.removeAll();
                r.message.channel.updateOverwrite(data.User, { 'VIEW_CHANNEL': true });
                r.message.channel.setName(`📜┊${c.users.cache.get(data.User).username}┊✅`);
                r.message.react('🔒');
                r.message.edit(ticket.embed);
                await schema.ticket.findOneAndUpdate(ticket.config, {
                    Guild: data.Guild,
                    Channel: data.Channel,
                    Ticket: data.Ticket,
                    Transcript: data.Transcript,
                    User: data.User,
                    Opened: true,
                    Status: 0
                });
            } else if (data.Status === 4) {
                r.message.reactions.removeAll();
                r.message.edit(new MessageEmbed()
                    .setColor('RANDOM')
                    .setAuthor(botName, c.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setTitle('Tiket akan dihapus dalam 3 detik.')
                    .setFooter('Made By ARVIN3108 ID', Icon));
                setTimeout(() => r.message.channel.delete(), 3000);
                await schema.ticket.findOneAndDelete(ticket.config);
            }
        } else if (r.emoji.name === '🔓') {
            if (data.Status === 2) {
                r.message.reactions.removeAll();
                r.message.edit(new MessageEmbed()
                    .setColor('RANDOM')
                    .setAuthor(botName, c.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setTitle('Apakah kamu yakin untuk membuka tiket?')
                    .setDescription('Klik emoji :x: untuk membatalkan.\n\nKlik emoji :white_check_mark: untuk membuka tiket.')
                    .setFooter('Made By ARVIN3108 ID', Icon))
                r.message.react('❌');
                r.message.react('✅');
                await schema.ticket.findOneAndUpdate(ticket.config, {
                    Guild: data.Guild,
                    Channel: data.Channel,
                    Ticket: data.Ticket,
                    Transcript: data.Transcript,
                    User: data.User,
                    Opened: data.Opened,
                    Status: 3
                });
            }
        } else if (r.emoji.name === '⛔') {
            if (data.Status === 2) {
                r.message.reactions.removeAll();
                r.message.edit(new MessageEmbed()
                    .setColor('RANDOM')
                    .setAuthor(botName, c.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setTitle('Apakah kamu yakin untuk menghapus tiket?')
                    .setDescription('Klik emoji :x: untuk membatalkan.\n\nKlik emoji :white_check_mark: untuk menghapus tiket.')
                    .setFooter('Made By ARVIN3108 ID', Icon))
                r.message.react('❌');
                r.message.react('✅');
                await schema.ticket.findOneAndUpdate(ticket.config, {
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
        const options = { ID: r.message.id };
        if (r.emoji.name === '⛔') {
            if (transcript.Status === 0) {
                r.message.reactions.removeAll();
                r.message.edit(new MessageEmbed()
                    .setColor('RANDOM')
                    .setAuthor(botName, c.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setTitle('Apakah kamu yakin untuk menghapus transcript?')
                    .setDescription('Klik emoji :x: untuk membatalkan.\n\nKlik emoji :white_check_mark: untuk menghapus transcript.')
                    .setFooter('Made By ARVIN3108 ID', Icon))
                r.message.react('❌');
                r.message.react('✅');
                await schema.transcript.findOneAndUpdate(options, {
                    Guild: transcript.Guild,
                    Channel: transcript.Channel,
                    Ticket: transcript.Ticket,
                    ID: transcript.ID,
                    Status: 1
                })
            }
        } else if (r.emoji.name === '❌') {
            if (transcript.Status === 1) {
                r.message.reactions.removeAll();
                r.message.edit(new MessageEmbed()
                    .setColor('RANDOM')
                    .setAuthor(botName, c.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setDescription(`**Transcript Ini Terhubung Dengan Ticket** <#${transcript.Ticket}>\n\nKlik emoji :no_entry: untuk menghapus transcript.`)
                    .setFooter('Made By ARVIN3108 ID', Icon));
                r.message.react('⛔');
                await schema.transcript.findOneAndUpdate(options, {
                    Guild: transcript.Guild,
                    Channel: transcript.Channel,
                    Ticket: transcript.Ticket,
                    ID: transcript.ID,
                    Status: 0
                });
            }
        } else if (r.emoji.name === '✅') {
            if (transcript.Status === 1) {
                r.message.reactions.removeAll();
                r.message.edit(new MessageEmbed()
                    .setColor('RANDOM')
                    .setAuthor(botName, c.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setTitle('Transcript akan dihapus dalam 3 detik.')
                    .setFooter('Made By ARVIN3108 ID', Icon));
                setTimeout(() => r.message.channel.delete(), 3000);
                await schema.transcript.findOneAndDelete(options);
            }
        }
    }
}