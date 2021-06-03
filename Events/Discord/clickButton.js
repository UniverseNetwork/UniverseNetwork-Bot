module.exports = async (b) => {
    await b.defer();
    // Import a Function
    let { MessageEmbed } = require('discord.js'),
        { MessageButton } = require('discord-buttons'),
        schema = require('../../Handlers/Schema'),
        i = process.env.Icon || require('../../config.json').Icon,
        g = b.client.guilds.cache.get('761872006513033238'),

        //Ticket Configuration
        buttonID = 'Ticket',
        ticket = {
            embed: new MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                .setTitle('Pesan akan segera dibalas oleh staff.')
                .setDescription('Klik tombol dibawah ini untuk menutup tiket.')
                .setFooter('Made By ARVIN3108 ID', i),
            schema: {
                Ticket: b.message.id
            }
        }
    if (b.clicker.bot) return;
    if (!b.message.guild) return;
    if (b.id === buttonID) {
        const data = await schema.ticket.findOne({
            Guild: b.guild.id,
            User: b.clicker.user.id,
            Opened: true
        }).catch(e => console.log(e));
        if (!data) {
            b.guild.channels.create(`📜┊${b.clicker.user.username}┊✅`, {
                type: 'text',
                parent: '830317978750025729',
                permissionOverwrites: [
                    {
                        id: b.guild.id,
                        deny: ['VIEW_CHANNEL']
                    },
                    {
                        id: b.clicker.user.id,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ADD_REACTIONS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS']
                    },
                    {
                        id: '761876701743284234',
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ADD_REACTIONS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS']
                    }
                ]
            }).then(channel => {
                channel.send(`<@${b.clicker.user.id}>, Selamat Datang Di Tiketmu!`, {
                    buttons: [new MessageButton()
                        .setID('Lock')
                        .setStyle('red')
                        .setLabel('Tutup Ticket')],
                    embed: ticket.embed
                }).then(resultMessage => {
                    b.client.guilds.cache.get('846004581372657695').channels.create(`📜┊${b.clicker.user.username}┊📑`, {
                        type: 'text',
                        parent: '846005890338783292'
                    }).then(transcript => {
                        new schema.ticket({
                            Guild: b.guild.id,
                            Channel: channel.id,
                            Ticket: resultMessage.id,
                            Transcript: transcript.id,
                            User: b.clicker.user.id,
                            Opened: true,
                            Status: 0
                        }).save();
                        transcript.send({
                            buttons: [new MessageButton()
                                .setStyle('red')
                                .setLabel('Hapus Transcript')
                                .setID('Delete')],
                            embed: new MessageEmbed()
                                .setColor('RANDOM')
                                .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                                .setDescription(`**Transcript Ini Terhubung Dengan Ticket** <#${channel.id}>\n\nKlik tombol dibawah ini untuk menghapus transcript.`)
                                .setFooter('Made By ARVIN3108 ID', i)
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
        transcript = await schema.transcript.findOne({ ID: b.message.id }).catch(e => console.log(e));
    if (!transcript) {
        if (!data) return;
        if (b.id === 'Lock') {
            if (data.Status === 0) {
                b.message.edit({
                    buttons: [new MessageButton()
                        .setID('No')
                        .setStyle('red')
                        .setLabel('Tidak'),
                    new MessageButton()
                        .setID('Yes')
                        .setStyle('green')
                        .setLabel('Ya')],
                    embed: new MessageEmbed()
                        .setColor('RANDOM')
                        .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                        .setTitle('Apakah kamu yakin untuk menutup tiket?')
                        .setDescription('Klik tombol dibawah ini untuk menjawab.')
                        .setFooter('Made By ARVIN3108 ID', i)
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
        } else if (b.id === 'No') {
            if (data.Status === 1) {
                b.message.edit({
                    buttons: [new MessageButton()
                        .setID('Lock')
                        .setStyle('red')
                        .setLabel('Tutup Tiket')],
                    embed: ticket.embed
                })
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
                b.message.edit({
                    buttons: [new MessageButton()
                        .setID('Unlock')
                        .setStyle('blurple')
                        .setLabel('Buka Tiket Kembali'),
                    new MessageButton()
                        .setID('Delete')
                        .setStyle('red')
                        .setLabel('Hapus Tiket')],
                    embed: new MessageEmbed()
                        .setColor('RANDOM')
                        .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                        .setTitle('Tiket telah Ditutup.')
                        .setDescription('Klik tombol dibawah ini untuk menghapus atau membuka kembali tiket.')
                        .setFooter('Made By ARVIN3108 ID', i)
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
        } else if (b.id === 'Yes') {
            if (data.Status === 1) {
                b.channel.updateOverwrite(data.User, { 'VIEW_CHANNEL': false });
                await b.channel.setName(`📜┊${b.client.users.cache.get(data.User).username}┊❌`);
                b.message.edit({
                    buttons: [new MessageButton()
                        .setID('Unlock')
                        .setStyle('blurple')
                        .setLabel('Buka Tiket Kembali'),
                    new MessageButton()
                        .setID('Delete')
                        .setStyle('red')
                        .setLabel('Hapus Tiket')],
                    embed: new MessageEmbed()
                        .setColor('RANDOM')
                        .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                        .setTitle('Tiket telah Ditutup.')
                        .setDescription('Klik tombol dibawah ini untuk menghapus atau membuka kembali tiket.')
                        .setFooter('Made By ARVIN3108 ID', i)
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
                b.channel.updateOverwrite(data.User, { 'VIEW_CHANNEL': true });
                awaitb.channel.setName(`📜┊${b.client.users.cache.get(data.User).username}┊✅`);
                b.message.edit({
                    buttons: [new MessageButton()
                        .setID('Lock')
                        .setStyle('red')
                        .setLabel('Tutup Ticket')],
                    embed: ticket.embed
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
                b.message.edit(new MessageEmbed()
                    .setColor('RANDOM')
                    .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setTitle('Tiket akan dihapus dalam 3 detik.')
                    .setFooter('Made By ARVIN3108 ID', i));
                setTimeout(() => b.channel.delete(), 3000);
                await schema.ticket.findOneAndDelete(ticket.schema);
            }
        } else if (b.id === 'Unlock') {
            if (data.Status === 2) {
                b.message.edit({
                    buttons: [new MessageButton()
                        .setID('No')
                        .setStyle('red')
                        .setLabel('Tidak'),
                    new MessageButton()
                        .setID('Yes')
                        .setStyle('green')
                        .setLabel('Ya')],
                    embed: new MessageEmbed()
                        .setColor('RANDOM')
                        .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                        .setTitle('Apakah kamu yakin untuk membuka tiket?')
                        .setDescription('Klik tombol dibawah ini untuk menjawab.')
                        .setFooter('Made By ARVIN3108 ID', i)
                }); await schema.ticket.findOneAndUpdate(ticket.config, {
                    Guild: data.Guild,
                    Channel: data.Channel,
                    Ticket: data.Ticket,
                    Transcript: data.Transcript,
                    User: data.User,
                    Opened: data.Opened,
                    Status: 3
                });
            }
        } else if (b.id === 'Delete') {
            if (data.Status === 2) {
                b.message.edit({
                    buttons: [new MessageButton()
                        .setID('No')
                        .setStyle('red')
                        .setLabel('Tidak'),
                    new MessageButton()
                        .setID('Yes')
                        .setStyle('green')
                        .setLabel('Ya')],
                    embed: new MessageEmbed()
                        .setColor('RANDOM')
                        .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                        .setTitle('Apakah kamu yakin untuk menghapus tiket?')
                        .setDescription('Klik tombol dibawah ini untuk menjawab.')
                        .setFooter('Made By ARVIN3108 ID', i)
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
    }
}