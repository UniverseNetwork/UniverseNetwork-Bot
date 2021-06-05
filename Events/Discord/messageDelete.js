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
        { MessageButton } = require('discord-buttons'),
        c = require('../../Modules/Client'),
        i = process.env.Icon || require('../../config.json').Icon,
        g = c.guilds.cache.get('761872006513033238'),
        ticket = await schema.ticket.findOne(options.ticket).catch(e => console.log(e)),
        transcript = await schema.transcript.findOne(options.transcript).catch(e => console.log(e));
    if (!transcript) {
        if (!ticket) return;
        if (ticket.Status === 0) {
            m.channel.send(`<@${ticket.User}>, Selamat Datang Di Tiketmu!`, {
                buttons: [new MessageButton()
                    .setID('Lock')
                    .setStyle('red')
                    .setLabel('Tutup Ticket')],
                embed: new MessageEmbed()
                    .setColor('RANDOM')
                    .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setTitle('Pesan akan segera dibalas oleh staff.')
                    .setDescription('Klik tombol dibawah ini untuk menutup tiket.')
                    .setFooter('Made By ARVIN3108 ID', i)
            }).then(async m => {
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
            m.channel.send(`<@${ticket.User}>, Selamat Datang Di Tiketmu!`, {
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
            }).then(async m => {
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
            m.channel.send(`<@${ticket.User}>, Selamat Datang Di Tiketmu!`, {
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
            }).then(async m => {
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
            m.channel.send(`<@${ticket.User}>, Selamat Datang Di Tiketmu!`, {
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
            }).then(async m => {
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
            m.channel.send(`<@${ticket.User}>, Selamat Datang Di Tiketmu!`, {
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
            }).then(async m => {
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
            m.channel.send({
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
                    .setTitle('Apakah kamu yakin untuk menghapus transcript?')
                    .setDescription('Klik tombol dibawah ini untuk menjawab.')
                    .setFooter('Made By ARVIN3108 ID', i)
            }).then(async m => {
                await schema.transcript.findOneAndUpdate(options.transcript, {
                    Guild: transcript.Guild,
                    Channel: transcript.Channel,
                    Ticket: transcript.Ticket,
                    ID: m.id,
                    Status: transcript.Status
                });
            })
        } else if (transcript.Status === 1) {
            m.channel.send({
                buttons: [new MessageButton()
                    .setID('Delete')
                    .setStyle('red')
                    .setLabel('Hapus Transcript')],
                embed: new MessageEmbed()
                    .setColor('RANDOM')
                    .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setDescription(`**Transcript Ini Terhubung Dengan Ticket** <#${transcript.Ticket}>\n\nKlik tombol dibawah ini untuk menghapus transcript.`)
                    .setFooter('Made By ARVIN3108 ID', i)
            }).then(async m => {
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