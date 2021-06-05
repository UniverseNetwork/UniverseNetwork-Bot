module.exports = () => {
    const client = require('../../Modules/Client'),
        s = require('../../Modules/Slash'),
        v = process.env.Version || require('../../config.json').Version;
    console.log(client.user.username + ' Bot is online')
    setInterval(() => {
        const status = [
            'Versi ' + v,
            'Dibuat Oleh ARVIN3108 ID',
            'IP: play.universnetwork.xyz',
            'OneBlock Coming Soon',
            'Selamat Hari Raya Idul Fitri 1442 H - Mohon Maaf Lahir Dan Batin']
        client.user.setActivity(status[Math.floor(Math.random() * status.length)]);
    }, 1000)
}