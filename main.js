let { commands, events } = require('./Functions/Handlers'); commands(); events();
require('mongoose').connect(process.env.MongoDB || require('./config.json').MongoDB, {
    useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false
}).then(console.log('Connected To MongoDB')); require('./Modules/Client').login(process.env.Token || require('./config.json').Token);