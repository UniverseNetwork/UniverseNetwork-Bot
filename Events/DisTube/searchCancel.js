module.exports = async m => {
    let w = await m.channel.fetchWebhooks();
    w.first().send(':x: **Pencarian Dibatalkan**', {
        username: `${process.env.BotName || require('../../config.json')['Bot Name']} Song Player`,
        avatarURL: 'https://i.imgur.com/pBmA5S6.png'
    });
};