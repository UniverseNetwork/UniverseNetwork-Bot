let { Message } = require('discord.js')
module.exports = {
    name: 'nowplaying',
    alias: 'np',
    /**
     * @param {Message} m 
     */
    async run(m) {
        m.delete()
        let q = await require('../Modules/DisTube').getQueue(m), { MessageEmbed } = require('discord.js'),
            g = m.client.guilds.cache.get('761872006513033238');
        //// o = { username: 'UniversNetwork Song Player', avatarURL: 'https://i.imgur.com/pBmA5S6.png' }
        if (q) {
            m.channel.send({
                embeds: [new MessageEmbed()
                    .setColor('#02C2FF')
                    .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setThumbnail('https://yt3.ggpht.com/ytc/AAUvwnhRCS00s226UbsoI2uhe2XFedXEIBw9jaOtstvTo08=s900-c-k-c0x00ffffff-no-rj')
                    .setDescription(`:clipboard: **Diminta Oleh** ${m.author}\n\u200B`)
                    .addField('\u200B', '\u200B', true)
                    .addField('**Song Player**', '\u200B', true)
                    .addField(':white_check_mark: Terhubung Ke Voice Channel', `<#${m.guild.members.cache.get(m.client.user.id).voice.channel.id}>`)
                    .addField(':arrow_forward: Sedang Memutar Lagu', `[${q.songs[0].name}](${q.songs[0].url})`)
                    .addField(':stopwatch: Durasi Saat Ini', `\`${q.formattedCurrentTime} / ${q.songs[0].formattedDuration}\``)
                    .addField(':information_source: Status', `**Volume:** \`${q.volume}%\` **| Repeat:** \`${q.repeatMode ? q.repeatMode == 2 ? "Semua Lagu" : "Hanya Lagu Ini" : "Mati"}\`\n**Acak Lagu:** \`${q.shuffle ? "Hidup" : "Mati"}\` **| Autoplay:** \`${q.autoplay ? "Hidup" : "Mati"}\``)
                    .setImage(q.songs[0].thumbnail)
                    .setFooter('Made By ARVIN3108 ID', process.env.Icon || require('../config.json').Icon)]
            });
        } else if (!q) m.channel.send({ content: ':x: **Bot tidak sedang memutar lagu!**' });
    }
}