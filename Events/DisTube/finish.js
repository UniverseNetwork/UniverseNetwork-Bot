module.exports = async m => {
    let w = await m.channel.fetchWebhooks();
    w.first().send(`:exclamation: **Lagu Di Dalam Daftar Putar Telah Habis!**\n:next_track: **Menunggu Lagu Lain Untuk Diputar**`,
        { username: `${process.env.BotName || require('../../config.json')['Bot Name']} Song Player`, avatarURL: 'https://i.imgur.com/pBmA5S6.png' })
}