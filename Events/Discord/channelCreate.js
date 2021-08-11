module.exports = c => {
    if (c.type !== 'GUILD_TEXT') return;
    c.createWebhook('UniversNetwork').catch(e => console.log(e));
}