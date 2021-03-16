module.exports = {
    name: 'whatsapp',
    description: 'To send a whatsapp link',
    execute(message, wh) {
        message.delete()
        wh.send('**WhatsApp:** https://chat.whatsapp.com/DNG8OO7XFu8Kb5IyMxyQ7N', {
            username: 'UniversNetwork WhatsApp Inviters',
            avatarURL: 'https://i.imgur.com/hP6VsJP.jpg'
        })
    }
}