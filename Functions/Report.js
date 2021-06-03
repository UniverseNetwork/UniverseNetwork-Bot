module.exports = (reason, e) => {
    require('../Modules/Client').users.cache.get('700166055326384179').send(`**${reason}**\n\`\`\`js\n${e}\n\`\`\``);
    console.log(e);
};