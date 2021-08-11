module.exports = {
    name: 'help',
    description: 'This is a help command',
    async run(m) {
        const prevEmoji = '⬅️',
            nextEmoji = '➡️',
            c = require('../Modules/Client'),
            Icon = process.env.Icon || require('../config.json').Icon,
            Prefix = await require('../Functions/Handlers').prefix(m),
            { MessageEmbed } = require('discord.js'),
            embed = new MessageEmbed()
                .setColor('#02C2FF')
                .setAuthor('UniversNetwork', c.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                .setTitle('**Prefix:** `' + Prefix + '`')
                .setDescription(':clipboard: **Diminta Oleh** <@' + m.author + '>\n\u200B\n\u200B')
                .addField('\u200B', '\u200B', true)
                .addField('Member List Of Commands', '\u200B', true)
                .addField('\u200B', '\u200B', true)
                .addField(`\`${Prefix}help\` \`${Prefix}?\``, 'Untuk memunculkan menu ini')
                .addField(`\`${Prefix}ip\``, 'Untuk melihat ip dari server ini')
                .addField(`\`${Prefix}whatsapp\` \`${Prefix}wa\``, 'Untuk melihat grup whatsapp dari server ini')
                .addField(`\`${Prefix}play\` \`${Prefix}p\``, 'Untuk memutar lagu *(sama seperti bot musik pada umumnya)*')
                .addField(`\`${Prefix}loop\` \`${Prefix}repeat\``, 'Untuk mengaktifkan atau menonaktifkan mode repeat lagu *(sama seperti bot musik pada umumnya)*')
                .addField(`\`${Prefix}shuffle\` \`${Prefix}random\` \`${Prefix}rm\``, 'Untuk mengaktifkan atau menonaktifkan mode acak lagu *(sama seperti bot musik pada umumnya)*')
                .addField(`\`${Prefix}autoplay\` \`${Prefix}ap\``, 'Untuk mengaktifkan atau menonaktifkan mode putar lagu otomatis')
                .addField(`\`${Prefix}skip\` \`${Prefix}s\``, 'Untuk melewati lagu yang sedang diputar *(sama seperti bot musik pada umumnya)*')
                .addField(`\`${Prefix}queue\` \`${Prefix}q\``, 'Untuk melihat daftar lagu yang sedang diputar *(sama seperti bot musik pada umumnya)*')
                .addField(`\`${Prefix}join\` \`${Prefix}connect\` \`${Prefix}summon\``, 'Untuk membuat bot masuk ke voice channel *(sama seperti bot musik pada umumnya)*')
                .addField(`\`${Prefix}leave\` \`${Prefix}disconnect\` \`${Prefix}dc\` \`${Prefix}stop\``, 'Untuk menghentikan dan men-disconnect bot setelah memutar lagu')
                .addField(`\`${Prefix}vote\``, 'Untuk mengunjungi link vote server ini')
                .addField(`\`${Prefix}ping\``, 'Untuk mengukur ping dari bot dan API')
                .addField(`\`${Prefix}search\``, 'Untuk mencari gambar di google dan anime/manga di kitsu')
                .addField(`\`${Prefix}minecraft\` \`${Prefix}mc\``, 'Untuk melihat info tentang server minecraft')
                .addField(`\`${Prefix}avatar\``, 'Untuk melihat avatar')
                .addField(`\`${Prefix}info\``, 'Untuk melihat informasi dari server atau bot\n\u200B\n\u200B')
                .addField('Check The Wiki For English Version', 'https://github.com/ARVIN3108/UniversNetwork/blob/main/README.md\n\u200B')
                .addField('Halaman 1/2', 'Klik Emoji ' + nextEmoji + ' Untuk Pergi Ke Halaman Berikutnya')
                .setFooter('Made By ARVIN3108 ID', Icon);
        let result = await m.channel.send(embed);
        m.delete().then(result.react(nextEmoji));
        c.on('messageReactionAdd', async (r, u) => {
            if (u.bot) return;
            if (!r.message.guild) return;
            if (m.author.id !== u.id) return;
            if (r.message.id === result.id) {
                if (r.emoji.name === nextEmoji) {
                    result.reactions.removeAll();
                    result.react(prevEmoji);
                    result.edit(new MessageEmbed()
                        .setColor('#02C2FF')
                        .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                        .setTitle('**Prefix:** `' + Prefix + '`')
                        .setDescription(':clipboard: **Diminta Oleh** <@' + m.author + '>\n\n\u200B')
                        .addField('\u200B', '\u200B', true)
                        .addField('Admin List Of Commands', '\u200B', true)
                        .addField('\u200B', '\u200B', true)
                        .addField(`\`${Prefix}kick\``, 'Untuk meng-kick Member')
                        .addField(`\`${Prefix}ban\``, 'Untuk Meng-ban Member')
                        .addField(`\`${Prefix}mute\``, 'Untuk Meng-mute Member dengan waktu atau permanen')
                        .addField(`\`${Prefix}unmute\``, 'Untuk Meng-unmute Member')
                        .addField(`\`${Prefix}playskip\` \`${Prefix}ps\``, 'Untuk Memutar Dan Melewati Lagu Secara Bersamaan')
                        .addField(`\`${Prefix}volume\` \`${Prefix}vol\``, 'Untuk Mengubah Volume Suara Bot Saat Memutar Lagu')
                        .addField(`\`${Prefix}say\``, 'Untuk Mengirim Pesan Sebagai Bot')
                        .addField(`\`${Prefix}clear\``, 'Untuk Menghapus Pesan Dengan Cepat')
                        .addField(`\`${Prefix}prefix\``, 'Untuk Mengubah Prefix Bot Untuk Server Ini\n\u200B\n\u200B')
                        .addField('Check The Wiki For English Version', 'https://github.com/ARVIN3108/UniversNetwork/blob/main/README.md\n\u200B')
                        .addField('Halaman 2/2', 'Klik Emoji ' + prevEmoji + ' Untuk Pergi Ke Halaman Sebelumnya')
                        .setFooter('Made By ARVIN3108 ID', Icon));
                } else if (r.emoji.name === prevEmoji) {
                    result.reactions.removeAll();
                    result.react(nextEmoji);
                    result.edit(embed);
                };
            };
        });
    }
};
