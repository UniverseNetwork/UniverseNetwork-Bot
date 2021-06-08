module.exports = c => {
    if (c.type !== 'text') return;
    c.createWebhook('UniversNetwork').catch(e => console.log(e));
}