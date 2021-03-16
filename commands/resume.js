module.exports = {
    name: 'resume',
    description: 'To resume a song',
    async execute(message, args, distube) {
        let queue = await distube.getQueue(message)

        if (queue) {
            distube.resume(message)
            message.delete().then(message.channel.send(':arrow_forward: **Melanjutkan Lagu!**'))
        } else if (!queue) {
            message.delete().then(message.channel.send(':x: **Kamu tidak sedang memutar lagu!**'))
        }
    }
}