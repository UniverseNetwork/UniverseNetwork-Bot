let { Message } = require('discord.js')
module.exports = {
    name: 'shuffle',
    description: 'To toggle shuffle',
    /**
     * @param {Message} m 
     */
    async run(m) {
        m.delete();
        let d = require('../Modules/DisTube'), { MessageEmbed } = require('discord.js'),
            ////options = {username: 'UniversNetwork Song Player',
            ////avatarURL: 'https://i.imgur.com/pBmA5S6.png'},
            g = m.client.guilds.cache.get('761872006513033238'), q = await d.getQueue(m);
        if (q) {
            let mode = d.shuffle(m);
            m.channel.send({
                embeds: [new MessageEmbed()
                    .setColor('#02C2FF').setDescription(`:clipboard: **Diminta Oleh** ${m.author}\n\u200B`)
                    .setAuthor(g.name, g.iconURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .addField(":twisted_rightwards_arrows: **Mode Acak Lagu " + (mode ? "Dihidupkan!" : "Dimatikan!") + ' **', '\u200B')
                    .setFooter('Made By ARVIN3108 ID', process.env.Icon || require('../config.json').Icon)]
            });
        } else if (!q) {
            m.channel.send({ content: ':x: **Bot tidak sedang memutar lagu!**' });
        }
    }
}