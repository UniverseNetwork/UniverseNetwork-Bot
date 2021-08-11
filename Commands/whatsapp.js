module.exports = {
    name: 'whatsapp', alias: 'wa', description: 'To send a whatsapp link', async run(m) {
        m.delete().then((await m.channel.fetchWebhooks()).first().send({
            content: '**WhatsApp:** https://chat.whatsapp.com/DNG8OO7XFu8Kb5IyMxyQ7N',
            username: `${m.client.guilds.cache.get('761872006513033238').name} WhatsApp Inviters`,
            avatarURL: 'https://i.imgur.com/hP6VsJP.jpg'
        }))
    }
}