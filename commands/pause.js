module.exports = {
    name: 'pause',
    description: 'To Pause a song',
    async execute(message, args, distube) {
        let queue = await distube.getQueue(message)

        if (queue) {
            distube.pause(message)
            message.delete().then(message.channel.send(':pause_button: **Menjeda Lagu!**'))
        } else if (!queue) {
            message.delete().then(message.channel.send(':x: **Kamu tidak sedang memutar lagu!**'))
        }
    }
}