const { Message, Client } = require("discord.js"), s = require('../Handlers/Schema');
module.exports = {
    name: 'blacklist',
    description: 'To blacklist channel or words',
    /**
     * @param {Message} message 
     * @param {String[]} args 
     * @param {Client} client
     * @param {s} schema
     */
    execute(message, args, MessageEmbed, Prefix, Icon, client, schema) {
        const type = args[0]?.toLowerCase(),
            method = args[1]?.toLowerCase(),
            guild = { Guild: message.guild.id };
        message.delete();
        if (type === 'channel') {
            const query = message.mentions.channels.first().id;
            schema.blacklisted.channel.findOne(guild, async (e, data) => {
                if (method === 'add') {
                    if (!query) return message.channel.send(`:exclamation: **Kamu Perlu Menyertakan Channel Yang Ingin Di Tambahkan Ke BlackList!**\nContoh: \`${Prefix}blacklist\` \`channel\` \`add\` <#563912090041974796>`);
                    if (data) {
                        if (data.Channels.includes(query)) return message.channel.send(`<#${query}> **Telah Ada Dalam BlackList!**`);
                        data.Channels.push(query);
                        data.save();
                    } else {
                        new schema.blacklisted.channel({
                            Guild: guild.Guild,
                            Channels: query
                        }).save();
                    }
                    message.channel.send(`<#${query}> **Telah Di Tambahkan Ke BlackList**`);
                } else if (method === 'remove' || method === 'delete') {
                    if (!data) return message.channel.send('**Tidak Ada Channel Yang Di BlackList Saat Ini!**');
                    if (!data.Channels.includes(query)) return message.channel.send(`<#${query}> **Tidak Ada Dalam BlackList**`);
                    const filtered = data.Channels.filter(target => target !== query);
                    await schema.blacklisted.channel.findOneAndUpdate(guild, {
                        Guild: guild.Guild,
                        Channels: filtered
                    });
                    message.channel.send(`${query} **Telah Dihapus Dari BlackList**`);
                } else if (method === 'list') {
                    if (!data || !data.Channels.length) return message.channel.send(':x: **Tidak Ada Channel Yang Di BlackList!**');
                    message.channel.send(new MessageEmbed()
                        .setColor('#00fff7')
                        .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                        .setTitle('**Prefix:** `' + Prefix + '`')
                        .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + '>')
                        .addField('**List of BlackListed Channels**', `${data.Channels.map(i => `<#${i}>`).join(' ')}`)
                        .setFooter('Made By ARVIN3108 ID', Icon));
                } else {
                    message.channel.send(new MessageEmbed()
                        .setColor('#fff200')
                        .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                        .setTitle('**Prefix:** `' + Prefix + '`')
                        .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + '>' + '\n\u200B')
                        .addField('\u200B', '\u200B', true)
                        .addField('**List of BlackList Channels Commands**', '\u200B', true)
                        .addField('\u200B', '\u200B', true)
                        .addField(`\`${Prefix}blacklist channel add <Channel>\``, 'Untuk Menambahkan Channel Ke Dalam BlackList\n\u200B')
                        .addField(`\`${Prefix}blacklist channel remove <Channel>\`\n\`${Prefix}blacklist channel delete <Channel>\``, 'Untuk Menghapus Channel Dari BlackList\n\u200B')
                        .addField(`\`${Prefix}blacklist channel list\``, 'Untuk Melihat Channel Yang Di BlackList\n\u200B')
                        .addField('\u200B\n:memo: Catatan', '**Jika kata berkurung `<>`**\nMaka sifatnya wajib di isi!\n\n**Jika kata berkurung `[]`**\nMaka sifatnya tidak harus di isi!')
                        .setFooter('Made By ARVIN3108 ID', Icon));
                };
            });
        } else if (type === 'word') {
            const query = args[2]?.toLowerCase();
            schema.blacklisted.word.findOne(guild, async (e, data) => {
                if (method === 'add') {
                    if (!query) return message.channel.send(`:exclamation: **Kamu Perlu Menyertakan Kata Yang Ingin Di Tambahkan Ke BlackList!**\nContoh: \`${Prefix}blacklist\` \`word\` \`add\` \`gblk\``);
                    if (data) {
                        if (data.Words.includes(query)) return message.channel.send(`\`${query}\` **Telah Ada Dalam BlackList!**`);
                        data.Words.push(query);
                        data.save();
                    } else {
                        new schema.blacklisted.word({
                            Guild: guild.Guild,
                            Words: query
                        }).save();
                        message.channel.send(`\`${query}\` **Telah Di Tambahkan Ke BlackList**`);
                    };
                } else if (method === 'remove' || method === 'delete') {
                    if (!data) return message.channel.send('**Tidak Ada Kata Yang Di BlackList Saat Ini!**');
                    if (!data.Words.includes(query)) return message.channel.send(`\`${query}\` **Tidak Ada Dalam BlackList**`);
                    const filtered = data.Words.filter(target => target !== query);
                    await schema.blacklisted.word.findOneAndUpdate(guild, {
                        Guild: guild.Guild,
                        Words: filtered
                    });
                    message.channel.send(`\`${query}\` **Telah Dihapus Dari BlackList**`);
                } else if (method === 'list') {
                    if (!data || !data.Channels.length) return message.channel.send(':x: **Tidak Ada Channel Yang Di BlackList!**');
                    message.channel.send(new MessageEmbed()
                        .setColor('#00fff7')
                        .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                        .setTitle('**Prefix:** `' + Prefix + '`')
                        .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + '>')
                        .addField('**List Of BlackListed Words**', `${data.Words.map(i => `\`${i}\``).join(' ')}`)
                        .setFooter('Made By ARVIN3108 ID', Icon));
                } else {

                };
            });
        } else {
            message.channel.send(new MessageEmbed()
                .setColor('#ff0000')
                .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                .setTitle('**Prefix:** `' + Prefix + '`')
                .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + '>' + '\n\u200B')
                .addField('\u200B', '\u200B', true)
                .addField('**List Of BlackList Commands**', '\u200B', true)
                .addField('\u200B', '\u200B', true)
                .addField(`\`${Prefix}blacklist channel <add|remove/delete|list>\``, 'Membuat Channel Yang Di BlackList Tidak Bisa Menggunakan Command Bot Ini')
                .addField(`\`${Prefix}blacklist word <add|remove/delete|list>\``, 'Membuat Kata Yang Di BlackList Akan Dihapus Secara Otomatis')
                .addField('\u200B\n:memo: Catatan', '**Jika kata berkurung `<>`**\nMaka sifatnya wajib di isi!\n\n**Jika kata berkurung `[]`**\nMaka sifatnya tidak harus di isi!')
                .setFooter('Made By ARVIN3108 ID', Icon));
        };
    }
};