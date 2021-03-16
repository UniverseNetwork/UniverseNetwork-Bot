module.exports = {
    name: 'playskip',
    description: 'Joins, plays a video from youtube, and skip the song',
    execute(message, args, distube, wh) {
        message.delete()
        const voiceChannel = message.member.voice.channel,
            music = args.join(" "),
            options = {
                username: 'UniversNetwork Song Player',
                avatarURL: 'https://i.imgur.com/pBmA5S6.png'
            };
        if (message.member.roles.cache.has('799838913929412640')) {
            if (!music) return wh.send(':exclamation: **Kamu perlu menyertakan nama atau link video!**', options);
            if (!voiceChannel) return wh.send(':exclamation: **Kamu perlu berada di voice channel sebelum memutar lagu!**', options);
            distube.playSkip(message, music);
            wh.send(':mag_right: **Mencari** `' + music + '`', options);
        } else {
            wh.send('**Kamu tidak punya izin!**', options);
        };
    }
}