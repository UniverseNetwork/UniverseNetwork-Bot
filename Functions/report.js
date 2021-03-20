let { client } = require('../main')
module.exports = (reason, e) => {
    client.users.cache.get('700166055326384179').send(`**${reason}**\n\`\`\`js\n${e}\n\`\`\``)
    console.log(e)
}