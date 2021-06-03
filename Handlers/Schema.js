module.exports = {
    prefix: require('../Schema/Prefix'),
    blacklisted: {
        channel: require('../Schema/BlackListed Channels'),
        word: require('../Schema/BlackListed Words')
    },
    ticket: require('../Schema/Ticket'),
    transcript: require('../Schema/Transcript')
}