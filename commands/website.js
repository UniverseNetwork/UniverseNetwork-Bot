module.exports = {
    name: 'website',
    description: 'To show a website link',
    execute(message) {
        message.delete().then(message.channel.send('**Website:** https://universnetwork.xyz'))
    }
}