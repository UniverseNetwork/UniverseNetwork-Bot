let { Message } = require('discord.js');
/**
 * @param {Message} m 
 */
module.exports = async m => {
    let schema = require('../../Handlers/Schema'), client = require('../../Modules/Client'), Prefix = await require('../../Functions/Handlers').prefix(m), a = m.content.slice(Prefix.length).split(/ +/), cmd = a.shift().toLowerCase(),
        c = require('../../Collections/Commands'), command = c.get(cmd) || c.find(al => al.alias && al.alias.includes(cmd)), { MessageButton } = require('discord-buttons');
    setTimeout(async () => {
        const d = await schema.ticket.findOne({ Channel: m.channel.id }).catch(e => console.log(e));
        if (d) {
            if (m.id === d.Ticket) return
            let c = client.channels.cache.get(d.Transcript),
                w = await c.fetchWebhooks(),
                attachment = m.attachments.size;
            attachment = attachment == 0 ? '' : '\n\n**File:** ' + m.attachments.map(i => `[${i.name}](${i.attachment})`).join(' ')
            if (m.author.id === client.user.id) return ch.send(m.content, m.embeds, m.attachments);
            w.first().send(m.content + attachment, {
                username: m.author.tag,
                avatarURL: m.author.displayAvatarURL({ dynamic: true }),
                embeds: m.embeds
            });
        }
    }, 450);
    if (m.author.bot) return;
    if (m.content?.toLowerCase() === "halo?" || m.content?.toLowerCase() === "halo") m.lineReply('Hai!');
    if (m.content?.toLowerCase() === "hello?" || m.content?.toLowerCase() === "hello") m.lineReply('Hi!');
    if (!m.content.startsWith(Prefix) || m.author.dmChannel) return;
    if (await require('../../Functions/Handlers').blacklisted.channel(m) === true) return m.delete().then(m.channel.send(':x: **Kamu Tidak Bisa Menggunakan Bot Di Channel Ini!**').then(m => m.delete({ timeout: 3000 })));
    if (command && cmd !== 'youtube' && cmd !== 'yt' && command && m.author.id !== '700166055326384179') return;
    if (cmd === 'button') return m.channel.send('a', new MessageButton()
        .setStyle('green')
        .setLabel('Test')
        .setID('Ticket')
    )
    command.run(m, a, cmd);
};