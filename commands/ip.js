module.exports = {
    name: 'ip',
    description: 'This is a ip command',
    run(m) {
        m.delete().then(m.channel.send({content: '**IP: play.universenetwork.id**'}))
    }
}