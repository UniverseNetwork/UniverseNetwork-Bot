let collect = require('../Collections/Events');
module.exports = () => {
    for (const f of require('fs').readdirSync('./Events/Discord/').filter(f => f.endsWith('.js'))) {
        require('../Modules/Client').on(f.split('.')[0], require(`../Events/Discord/${f}`).bind(null));
        collect.set(f.split('.')[0], f);
    }
    for (const f of require('fs').readdirSync('./Events/DisTube/').filter(f => f.endsWith('.js'))) {
        require('../Modules/DisTube').on(f.split('.')[0], require(`../Events/DisTube/${f}`).bind(null));
        collect.set(f.split('.')[0], f);
    }
    // for (const f of require('fs').readdirSync('./Events/Slash').filter(f => f.endsWith('.js'))) {
    //     require('../Modules/Slash').on(f.split('.')[0], require(`../Events/Slash/${f}`).bind(null));
    //     collect.set(f.split('.')[0], f);
    // }
};