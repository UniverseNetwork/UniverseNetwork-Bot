module.exports = async m => {
    let w = await m.channel.fetchWebhooks();
    w.first().send(':x: **Tidak Ada Orang Di Voice Channel!**\n:no_entry: **Meninggalkan Voice Channel!**', {
        username: `${require('../../Modules/Client').guilds.cache.get('761872006513033238').name} Song Player`,
        avatarURL: 'https://i.imgur.com/pBmA5S6.png'
    });
};