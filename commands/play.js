// const ytdl = require('ytdl-core');
// const ytSearch = require('yt-search');
module.exports = {
    name: 'play',
    description: 'Joins and plays a video from youtube',
    async execute(message, args, distube, wh) {
        message.delete()
        const voiceChannel = message.member.voice.channel,
            music = args.join(" "),
            options = {
                username: 'UniversNetwork Song Player',
                avatarURL: 'https://i.imgur.com/pBmA5S6.png'
            }
        if (!music) return wh.send(':exclamation: **Kamu perlu menyertakan nama atau link video!**', options)
        if (!voiceChannel) return wh.send(':exclamation: **Kamu perlu berada di voice channel sebelum memutar lagu!**', options)
        distube.play(message, music).then(wh.send(':mag_right: **Mencari** `' + music + '`', options))
        
        // const permissions = voiceChannel.permissionsFor(message.client.user);
        // if (!permissions.has('CONNECT')) return message.delete().then(message.channel.send(':x: **Bot tidak punya izin untuk terhubung ke voice channel**'))
        // if (!permissions.has('SPEAK')) return message.delete().then(message.channel.send(':x: **Bot tidak punya izin untuk memutar lagu!**'))
        // if (!args.length) return message.delete().then(message.channel.send(':exclamation: **Kamu perlu menyertakan nama atau link video!**'))
        // const connection = await voiceChannel.join()

        // const videoFinder = async (query) => {
        //     const videoResult = await ytSearch(query);

        //     return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;

        // }

        // const video = await videoFinder(args.join(' '));

        // if (video) {
        //     const stream = ytdl(video.url, { filter: 'audioonly' });
        //     connection.play(stream, { seek: 0, volume: 1 })
        // const embed = new MessageEmbed()
        //     .setColor('#02C2FF')
        //     .setAuthor('UniversNetwork', 'https://cdn.discordapp.com/app-icons/792994169659981846/63db7674caa58a0694d989693bc4b60a.png?size=64', 'https://minecraft-mp.com/server-s272254')
        //     .setTitle('**Prefix:** `.`')
        //     .setThumbnail('https://yt3.ggpht.com/ytc/AAUvwnhRCS00s226UbsoI2uhe2XFedXEIBw9jaOtstvTo08=s900-c-k-c0x00ffffff-no-rj')
        //     .setDescription(':clipboard: **Diminta Oleh ' + message.author.username + '**\n\u200B\n\u200B')
        //     .addField('\u200B', '\u200B', true)
        //     .addField('**Song Player**', '\u200B', true)
        //     .addField(':white_check_mark: **Terhubung Ke Voice Channel**', voiceChannel.name)
        //     .addField(':arrow_forward: Sedang Memutar Lagu', video.title)
        //     .addField(':stopwatch: Durasi', video.duration.timestamp)
        //     .addField(':movie_camera: Link Video', video.url)
        //     .addField('​:film_frames: Diupload Oleh', video.author.name + '\n' + video.author.url)
        //     .addField(':watch: Waktu Upload', video.ago)
        //     .setImage(video.thumbnail)
        //     .setFooter('Made By ARVIN3108 ID', 'https://cdn.discordapp.com/avatars/700166055326384179/3ec8287199dc402fe6a587902e300749.png?size=64')
        // message.delete().then(message.channel.send(embed))
        //         } else {
        //             message.delete().then(message.channel.send(':x: **Tidak dapat menemukan lagu!**'))
        //         }
    }
}