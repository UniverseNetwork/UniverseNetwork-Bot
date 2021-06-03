const { Message } = require('discord.js');
/**
 * @param {Message} m 
 */
module.exports = async m => {
    let options = {
        ticket: { Ticket: m.id },
        transcript: { ID: m.id }
    }, schema = require('../../Handlers/Schema'),
        { MessageEmbed } = require('discord.js'),
        client = require('../../Modules/Client'),
        Icon = process.env.Icon || require('../../config.json').Icon,
        ticket = await schema.ticket.findOne(options.ticket).catch(e => console.log(e)),
        transcript = await schema.transcript.findOne(options.transcript).catch(e => console.log(e));
    if (!transcript) {
        if (!ticket) return;
        if (ticket.Status === 0) {
            m.channel.send(`<@${ticket.User}>, Selamat Datang Di Tiketmu!`, new MessageEmbed()
                .setColor('RANDOM')
                .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                .setTitle('Pesan akan segera dibalas oleh staff.')
                .setDescription('Klik emoji :lock: untuk menutup tiket.')
                .setFooter('Made By ARVIN3108 ID', Icon)).then(async m => {
                    m.react('🔒');
                    await schema.ticket.findOneAndUpdate(options.ticket, {
                        Guild: ticket.Guild,
                        Channel: ticket.Channel,
                        Ticket: m.id,
                        Transcript: ticket.Transcript,
                        User: ticket.User,
                        Opened: ticket.Opened,
                        Status: ticket.Status
                    });
                })
        } else if (ticket.Status === 1) {
            m.channel.send(`<@${ticket.User}>, Selamat Datang Di Tiketmu!`, new MessageEmbed()
                .setColor('RANDOM')
                .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                .setTitle('Apakah kamu yakin untuk menutup tiket?')
                .setDescription('Klik emoji :x: untuk membatalkan.\n\nKlik emoji :white_check_mark: untuk menutup tiket.')
                .setFooter('Made By ARVIN3108 ID', Icon)).then(async m => {
                    m.react('❌');
                    m.react('✅');
                    await schema.ticket.findOneAndUpdate(options.ticket, {
                        Guild: ticket.Guild,
                        Channel: ticket.Channel,
                        Ticket: m.id,
                        Transcript: ticket.Transcript,
                        User: ticket.User,
                        Opened: ticket.Opened,
                        Status: ticket.Status
                    });
                })
        } else if (ticket.Status === 2) {
            m.channel.send(`<@${ticket.User}>, Selamat Datang Di Tiketmu!`, new MessageEmbed()
                .setColor('RANDOM')
                .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                .setTitle('Tiket telah Ditutup.')
                .setDescription('Klik emoji :unlock: untuk membuka kembali tiket.\n\nKlik emoji :no_entry: untuk menghapus tiket.')
                .setFooter('Made By ARVIN3108 ID', Icon)).then(async m => {
                    m.react('🔓');
                    m.react('⛔');
                    await schema.ticket.findOneAndUpdate(options.ticket, {
                        Guild: ticket.Guild,
                        Channel: ticket.Channel,
                        Ticket: m.id,
                        Transcript: ticket.Transcript,
                        User: ticket.User,
                        Opened: ticket.Opened,
                        Status: ticket.Status
                    });
                })
        } else if (ticket.Status === 3) {
            m.channel.send(`<@${ticket.User}>, Selamat Datang Di Tiketmu!`, new MessageEmbed()
                .setColor('RANDOM')
                .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                .setTitle('Apakah kamu yakin untuk membuka tiket?')
                .setDescription('Klik emoji :x: untuk membatalkan.\n\nKlik emoji :white_check_mark: untuk membuka tiket.')
                .setFooter('Made By ARVIN3108 ID', Icon)).then(async m => {
                    m.react('❌');
                    m.react('✅');
                    await schema.ticket.findOneAndUpdate(options.ticket, {
                        Guild: ticket.Guild,
                        Channel: ticket.Channel,
                        Ticket: m.id,
                        Transcript: ticket.Transcript,
                        User: ticket.User,
                        Opened: ticket.Opened,
                        Status: ticket.Status
                    });
                })
        } else if (ticket.Status === 4) {
            m.channel.send(`<@${ticket.User}>, Selamat Datang Di Tiketmu!`, new MessageEmbed()
                .setColor('RANDOM')
                .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                .setTitle('Apakah kamu yakin untuk menghapus tiket?')
                .setDescription('Klik emoji :x: untuk membatalkan.\n\nKlik emoji :white_check_mark: untuk menghapus tiket.')
                .setFooter('Made By ARVIN3108 ID', Icon)).then(async m => {
                    m.react('❌');
                    m .react('✅');
                    await schema.ticket.findOneAndUpdate(options.ticket, {
                        Guild: ticket.Guild,
                        Channel: ticket.Channel,
                        Ticket: m.id,
                        Transcript: ticket.Transcript,
                        User: ticket.User,
                        Opened: ticket.Opened,
                        Status: ticket.Status
                    });
                })
        }
    } else if (!ticket) {
        if (!transcript) return;
        if (transcript.Status === 0) {
            m.channel.send(new MessageEmbed()
                .setColor('RANDOM')
                .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                .setDescription(`**Transcript Ini Terhubung Dengan Ticket** <#${transcript.Ticket}>\n\nKlik emoji :no_entry: untuk menghapus transcript.`)
                .setFooter('Made By ARVIN3108 ID', Icon)).then(async m => {
                    m.react('⛔');
                    await schema.transcript.findOneAndUpdate(options.transcript, {
                        Guild: transcript.Guild,
                        Channel: transcript.Channel,
                        Ticket: transcript.Ticket,
                        ID: m.id,
                        Status: transcript.Status
                    });
                })
        } else if (transcript.Status === 1) {
            m.channel.send(new MessageEmbed()
                .setColor('RANDOM')
                .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                .setTitle('Apakah kamu yakin untuk menghapus transcript?')
                .setDescription('Klik emoji :x: untuk membatalkan.\n\nKlik emoji :white_check_mark: untuk menghapus transcript.')
                .setFooter('Made By ARVIN3108 ID', Icon)).then(async m => {
                    m.react('❌');
                    m.react('✅');
                    await schema.transcript.findOneAndUpdate(options.transcript, {
                        Guild: transcript.Guild,
                        Channel: transcript.Channel,
                        Ticket: transcript.Ticket,
                        ID: m.id,
                        Status: transcript.Status
                    });
                })
        }
    }
};