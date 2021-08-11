module.exports = {
    name: 'queue',
    description: 'To view list queue',
    async execute(message, distube, wh) {
        message.delete()
        let queue = await distube.getQueue(message),
            options = {
                username: 'UniversNetwork Song Player',
                avatarURL: 'https://i.imgur.com/pBmA5S6.png'
            };
        if (queue) {
            wh.send('**Daftar Lagu Yang Diputar Saat Ini**\n\n' + queue.songs.map((song, id) => `**${id + 1}**. [${song.name}](${song.url}) - \`${song.formattedDuration}\``).join("\n\n") + `\n\n**Diminta Oleh ${message.author}**`, options)
        } else if (!queue) {
            wh.send(':x: **Bot tidak sedang memutar lagu!**', options)
        }
    }
}