var { fetch } = require('version')
module.exports = function (client, Token) {
    console.log('\n===============================================================================\n')

    fetch('ms', (error, version) => {
        if (error) {
            console.error(error)
        } else {
            console.log('Loaded MS Version ' + version)
        }

        fetch('fs', (error, version) => {
            if (error) {
                console.error(error)
            } else {
                console.log('Loaded FS Version ' + version)
            }

            fetch('@discordjs/opus', (error, version) => {
                if (error) {
                    console.error(error)
                } else {
                    console.log('Loaded @Discord.JS/Opus Version ' + version)
                    console.log('Loaded Discord.JS Version ' + require('discord.js').version)
                    console.log('Loaded Mongoose Version ' + require('mongoose').version)
                    console.log('Loaded DisTube Version ' + require('distube').version)
                    console.log('Loaded Canvas Version ' + require('canvas').version)
                    console.log('Loaded @babel/core Version ' + require('@babel/core').version)
                }

                fetch('discord-reply', (error, version) => {
                    if (error) {
                        console.error(error)
                    } else {
                        console.log('Loaded Discord Reply Version ' + version)
                    }
                    fetch('opusscript', (error, version) => {
                        if (error) {
                            console.error(error)
                        } else {
                            console.log('Loaded Opus Script Version ' + version)
                        }

                        fetch('ffmpeg-static', (error, version) => {
                            if (error) {
                                console.error(error)
                            } else {
                                console.log('Loaded FFmpeg Static Version ' + version)
                            }

                            fetch('youtube-dl', (error, version) => {
                                if (error) {
                                    console.error(error)
                                } else {
                                    console.log('Loaded YouTube DL Version ' + version)
                                }

                                fetch('youtube-dl-exec', (error, version) => {
                                    if (error) {
                                        console.error(error)
                                    } else {
                                        console.log('Loaded Youtube DL Exec Version ' + version)
                                    }

                                    fetch('ytdl-core', (error, version) => {
                                        if (error) {
                                            console.error(error)
                                        } else {
                                            console.log('Loaded YTDL Core Version ' + version)
                                        }

                                        fetch('yt-search', (error, version) => {
                                            if (error) {
                                                console.error(error)
                                            } else {
                                                console.log('Loaded YT Search Version ' + version)
                                            }

                                            fetch('mongodb', (error, version) => {
                                                if (error) {
                                                    console.error(error)
                                                } else {
                                                    console.log('Loaded MongoDB Version ' + version)
                                                }

                                                fetch('version', (error, version) => {
                                                    if (error) {
                                                        console.error(error)
                                                    } else {
                                                        console.log('Loaded Package Version Detector Version ' + version)
                                                    }

                                                    fetch('eslint', (error, version) => {
                                                        if (error) {
                                                            console.error(error)
                                                        } else {
                                                            console.log('Loaded ESLint Version ' + version)
                                                        }

                                                        fetch('eslint-plugin-react', (error, version) => {
                                                            if (error) {
                                                                console.error(error)
                                                            } else {
                                                                console.log('Loaded ESLint Plugin React Version ' + version)
                                                            }


                                                            fetch('images-scraper', (error, version) => {
                                                                if (error) {
                                                                    console.error(error)
                                                                } else {
                                                                    console.log('Loaded Images Scraper Version ' + version)
                                                                }

                                                                fetch('request-promise-native', (error, version) => {
                                                                    if (error) {
                                                                        console.error(error)
                                                                    } else {
                                                                        console.log('Loaded Request Promise Native Version ' + version)
                                                                    }

                                                                    fetch('node', (error, version) => {
                                                                        if (error) {
                                                                            console.error(error)
                                                                        } else {
                                                                            console.log('Loaded Node Version ' + version)
                                                                        }

                                                                        fetch('node-fetch', (error, version) => {
                                                                            if (error) {
                                                                                console.error(error)
                                                                            } else {
                                                                                console.log('Loaded Node Fetch Version ' + version)
                                                                            }

                                                                            fetch('node-pre-gyp', (error, version) => {
                                                                                if (error) {
                                                                                    console.error(error)
                                                                                } else {
                                                                                    console.log('Loaded Node Pre GYP Version ' + version)
                                                                                }

                                                                                fetch('npm', (error, version) => {
                                                                                    if (error) {
                                                                                        console.error(error)
                                                                                    } else {
                                                                                        console.log('Loaded NPM Version ' + version)
                                                                                    }

                                                                                    fetch('python', (error, version) => {
                                                                                        if (error) {
                                                                                            console.error(error)
                                                                                        } else {
                                                                                            console.log('Loaded Python Version ' + version)
                                                                                        }

                                                                                        fetch('minecraft-server-util', (error, version) => {
                                                                                            if (error) {
                                                                                                console.error(error)
                                                                                            } else {
                                                                                                console.log('Loaded Minecraft Server Util Version ' + version)
                                                                                            }
                                                                                            console.log('\n===============================================================================\n')
                                                                                            client.login(Token)
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}