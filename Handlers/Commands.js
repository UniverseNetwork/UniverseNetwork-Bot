module.exports = () => {
    for (const f of require('fs').readdirSync('./Commands/').filter(f => f.endsWith('.js'))) {
        delete require.cache[require.resolve(`../Commands/${f}`)]
        let cmd = require(`../Commands/${f}`)
        if (cmd.name) {
            require('../Collections/Commands').set(cmd.name, cmd)
        } else continue;
    };
};