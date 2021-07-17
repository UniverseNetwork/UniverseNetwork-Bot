module.exports = (m, r) => {
    let i = 0;
    m.channel.send(`**Pilih Salah Satu Lagu Dibawah Ini**\n*Ketik Salah Satu Angka Untuk Memilih*\n\n${r.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n\n")}\n\n*Ketik Huruf Apapun Atau Tunggu 1 Menit Untuk Membatalkan*\n\n**Diminta Oleh** ${m.author}`);
};