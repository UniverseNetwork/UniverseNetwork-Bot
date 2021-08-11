module.exports = {
    name: 'join', description: 'Joins to Some Voice Channel', async run(m) {
        m.delete(); let v = m.member.voice.channel, { MessageEmbed } = require('discord.js'), { DisTubeVoiceManager } = require('distube'),
            ////o = { username: 'UniverseNetwork Song Player', avatarURL: 'https://i.imgur.com/pBmA5S6.png' },
            g = m.client.guilds.cache.get('761872006513033238');
        if (!v) return m.channel.send({ content: ':exclamation: **Kamu perlu berada di voice channel sebelum memutar lagu!**' });
        // if (!permissions.has('CONNECT')) return wh.send(':x: **Bot tidak punya izin untuk terhubung ke voice channel**', options);
        // if (!permissions.has('SPEAK')) return wh.send(':x: **Bot tidak punya izin untuk terhubung ke voice channel**', options);
        await new DisTubeVoiceManager().join(m.member.voice.channel).then(m.channel.send({
            embeds: [new MessageEmbed()
                .setColor('#02C2FF').setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                .setDescription(`:clipboard: **Diminta Oleh** ${m.author}\n\u200B\n\u200B`)
                .addField('\u200B', '\u200B', true).addField('Song Player', '\u200B', true).addField('\u200B', '\u200B', true)
                .addField(':white_check_mark: **Terhubung Ke Voice Channel**', `<#${v.id}>`)
                .setFooter('Made By ARVIN3108 ID', process.env.Icon || require('../config.json').Icon)]
        }));
    }
}