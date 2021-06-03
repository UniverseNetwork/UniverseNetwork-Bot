let { exec } = require('child_process');
module.exports = {
    name: 'terminal',
    alias: 'cmd',
    description: '',
    execute(m, a) {
        m.delete();
        if (m.author.id !== '700166055326384179') return;
        if (!a.join(' ')) return m.channel.send(':exclamation: **Kamu perlu menyertakan command yang ingin di jalankan!**');
        exec(a.join(' '), (e, r) => {
            if (err) return console.error(e)
            m.channel.send(r.slice(0, 2000), { code: 'js' })
        })
    }
}