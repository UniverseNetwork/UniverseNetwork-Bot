module.exports = c => {
    if (c.type === 'voice') return;
    c.createWebhook('UniversNetwork').catch(e => console.log(e));
}