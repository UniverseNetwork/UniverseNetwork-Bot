module.exports = async m => {
    let w = await m.channel.fetchWebhooks();
    w.first().send(`:exclamation: **Lagu Di Dalam Daftar Putar Telah Habis!**\n:next_track: **Menunggu Lagu Lain Untuk Diputar**`,
        { username: `${require('../../Modules/Client').guilds.cache.get('761872006513033238').name} Song Player`, avatarURL: 'https://i.imgur.com/pBmA5S6.png' })
}