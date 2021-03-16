module.exports = {
    name: 'reload',
    description: 'This is a reload command',
    execute(message, loadCMD) {
        if (message.author.id != '700166055326384179') return
            loadCMD()
            message.delete().then(message.channel.send('**Semua Command Telah Di Reload!**'))
    }
}