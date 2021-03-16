const { inspect } = require('util'),
    { Message } = require('discord.js');
module.exports = {
    name: 'eval',
    description: '',
    /**
     * 
     * @param {Message} message 
     * @param {String[]} args 
     */
    async execute(message, args, cmd, client, MessageEmbed, Prefix, Icon, wh, mongoose, distube) {
        message.delete()
        if (message.author.id !== '700166055326384179') return;
        const code = args.join(' ')
        if (!code) return message.channel.send(':exclamation: **Harap masukkan eval yang akan dijalankan!**')

        try {
            const result = await eval(code);
            let output = result

            if (typeof result !== 'string') {
                output = inspect(result)
            }

            message.channel.send(output, { code: 'js' }).catch(
                message.channel.send(':x: **Eval terlalu panjang untuk ditampilkan!**'))
        } catch {
            message.channel.send(':x: **Eval tidak valid atau belum di import!**')
        }

    }
}