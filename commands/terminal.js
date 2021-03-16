const { exec } = require('child_process'),
    { Message } = require('discord.js');
module.exports = {
    name: 'terminal',
    description: '',
    /**
     * 
     * @param {Message} message 
     * @param {String[]} args 
     */
    execute(message, args) {
        message.delete()
        if (message.author.id !== '700166055326384179') return;
        if (!args.join(' ')) return message.channel.send(':exclamation: **Kamu perlu menyertakan command yang ingin di jalankan!**');
        exec(args.join(' '), (err, res) => {
            if (err) return console.error(err)
            message.channel.send(res.slice(0, 2000), { code: 'js' })
        })
    }
}