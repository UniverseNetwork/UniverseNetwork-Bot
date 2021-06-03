const { Message } = require('discord.js')
module.exports = {
    name: 'join',
    description: 'Joins To Some Voice Channel',
    /**
     * 
     * @param {Message} message 
     * @param {*} MessageEmbed 
     * @param {*} wh 
     * @param {*} Icon 
     * @param {*} client 
     * @returns 
     */
    async execute(message, MessageEmbed, wh, Icon, client) {
        message.delete();
        const voiceChannel = message.member.voice.channel,
            // permissions = voiceChannel.permissionsFor(message.client.user),
            options = {
                username: 'UniversNetwork Song Player',
                avatarURL: 'https://i.imgur.com/pBmA5S6.png'
            };
        if (!voiceChannel) return wh.send(':exclamation: **Kamu perlu berada di voice channel sebelum memutar lagu!**', options);
        // if (!permissions.has('CONNECT')) return wh.send(':x: **Bot tidak punya izin untuk terhubung ke voice channel**', options);
        // if (!permissions.has('SPEAK')) return wh.send(':x: **Bot tidak punya izin untuk terhubung ke voice channel**', options);
        await voiceChannel.join().then(wh.send({
            username: options.username,
            avatarURL: options.avatarURL,
            embeds: [new MessageEmbed()
                .setColor('#02C2FF')
                .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                .setTitle('**Prefix:** `.`')
                .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + '>\n\u200B\n\u200B')
                .addField('\u200B', '\u200B', true)
                .addField('Song Player', '\u200B', true)
                .addField('\u200B', '\u200B', true)
                .addField(':white_check_mark: **Terhubung Ke Voice Channel**', voiceChannel.name)
                .setFooter('Made By ARVIN3108 ID', Icon)]
        }));
    }
}