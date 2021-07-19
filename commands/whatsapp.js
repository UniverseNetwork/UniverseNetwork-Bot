module.exports = {
    name: 'whatsapp', alias: 'wa', description: 'To send a whatsapp link', run(m) {
        m.delete().then(m.channel.send({ content: '**WhatsApp:** https://chat.whatsapp.com/DNG8OO7XFu8Kb5IyMxyQ7N' }))
    }
}