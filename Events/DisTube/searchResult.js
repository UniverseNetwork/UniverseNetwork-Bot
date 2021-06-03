module.exports = async (m, r) => {
    let i = 0, w = await m.channel.fetchWebhooks();
    w.first().send(`**Pilih Salah Satu Lagu Dibawah Ini**\n*Ketik Salah Satu Angka Untuk Memilih*\n\n${r.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n\n")}\n\n*Ketik Huruf Apapun Atau Tunggu 1 Menit Untuk Membatalkan*\n\n**Diminta Oleh** ${m.author}`, {
        username: `${process.env.BotName || require('../../config.json')['Bot Name']} Song Player`,
        avatarURL: 'https://i.imgur.com/pBmA5S6.png'
    });
};