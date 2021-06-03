module.exports = async m => {
    let w = await m.channel.fetchWebhooks();
    w.first().send(':x: **Tidak Ada Lagu Yang Bisa Diputar!\n:stop_button: **Menghentikan Pemutar Lagu!**', {
        username: `${process.env.BotName || require('../../config.json')['Bot Name']} Song Player`,
        avatarURL: 'https://i.imgur.com/pBmA5S6.png'
    });
};