module.exports = {
    name: 'whatsapp',
    alias: 'wa',
    description: 'To send a whatsapp link',
    async run(m) {
        let w = await m.channel.fetchWebhooks();
        m.delete()
        w.first().send('**WhatsApp:** https://chat.whatsapp.com/DNG8OO7XFu8Kb5IyMxyQ7N', {
            username: `${process.env.BotName || require('../config.json')['Bot Name']} WhatsApp Inviters`,
            avatarURL: 'https://i.imgur.com/hP6VsJP.jpg'
        })
    }
}