module.exports = async (m, e) => {
    let w = await m.channel.fetchWebhooks();
    require('../../Functions/Report')('DisTube Error', e);
    w.first().send(':x: **Error Terdeteksi! Melaporkan Error Ke <@700166055326384179>**', {
        username: `${process.env.BotName || require('../../config.json')['Bot Name']} Song Player`,
        avatarURL: 'https://i.imgur.com/pBmA5S6.png'
    });
};