module.exports = {
    name: 'reload',
    alias: 'load',
    description: 'This is a reload command',
    run(m) {
        if (m.author.id != '700166055326384179') return; require('../Handlers/Commands')();
        m.delete().then(m.channel.send('**Semua Command Telah Di Reload!**'));
    }
}