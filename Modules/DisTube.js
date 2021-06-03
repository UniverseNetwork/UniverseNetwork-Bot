let DisTube = require('distube'),
    YTCookie = process.env.YTCookie || require('../config.json')['YT Cookie'];
module.exports = new DisTube(require('./Client'), { searchSongs: true, emitNewSongOnly: true, youtubeCookie: YTCookie })