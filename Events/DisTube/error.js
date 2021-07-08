module.exports = async (m, e) => {
    let w = await m.channel.fetchWebhooks();
    require('../../Functions/Report')('DisTube Error', e);
    w.first().send(':x: **Error Terdeteksi! Melaporkan Error Ke <@700166055326384179>**', {
        username: `${require('../../Modules/Client').guilds.cache.get('761872006513033238').name} Song Player`,
        avatarURL: 'https://i.imgur.com/pBmA5S6.png'
    });
};