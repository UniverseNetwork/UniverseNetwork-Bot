let c = require('../Collections/Events');
module.exports = () => {
    for (const f of require('fs').readdirSync('./Events/Discord/').filter(f => f.endsWith('.js'))) {
        require('../Modules/Client').on(f.split('.')[0], require(`../Events/Discord/${f}`).bind(null));
        c.set(f.split('.')[0], f);
    }
    for (const f of require('fs').readdirSync('./Events/DisTube/').filter(f => f.endsWith('.js'))) {
        require('../Modules/DisTube').on(f.split('.')[0], require(`../Events/DisTube/${f}`).bind(null));
        c.set(f.split('.')[0], f);
    }
};