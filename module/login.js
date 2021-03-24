var { fetch } = require('version')
module.exports = (client) => {
    console.log('\n===============================================================================\n')

    fetch('ms', (e, v) => {
        if (e) {
            console.error(e)
        } else {
            console.log('Loaded MS Version ' + v)
        }

        fetch('fs', (e, v) => {
            if (e) {
                console.error(e)
            } else {
                console.log('Loaded FS Version ' + v)
            }

            fetch('@discordjs/opus', (e, v) => {
                if (e) {
                    console.error(e)
                } else {
                    console.log('Loaded @Discord.JS/Opus Version ' + v)
                    console.log('Loaded Discord.JS Version ' + require('discord.js').version)
                    console.log('Loaded Mongoose Version ' + require('mongoose').version)
                    console.log('Loaded DisTube Version ' + require('distube').version)
                    console.log('Loaded Canvas Version ' + require('canvas').version)
                    console.log('Loaded Canvacord Version ' + require('canvacord').version)
                    console.log('Loaded @babel/core Version ' + require('@babel/core').version)
                }

                fetch('discord-reply', (e, v) => {
                    if (e) {
                        console.error(e)
                    } else {
                        console.log('Loaded Discord Reply Version ' + v)
                    }
                    fetch('opusscript', (e, v) => {
                        if (e) {
                            console.error(e)
                        } else {
                            console.log('Loaded Opus Script Version ' + v)
                        }

                        fetch('ffmpeg-static', (e, v) => {
                            if (e) {
                                console.error(e)
                            } else {
                                console.log('Loaded FFmpeg Static Version ' + v)
                            }

                            fetch('youtube-dl', (e, v) => {
                                if (e) {
                                    console.error(e)
                                } else {
                                    console.log('Loaded YouTube DL Version ' + v)
                                }

                                fetch('youtube-dl-exec', (e, v) => {
                                    if (e) {
                                        console.error(e)
                                    } else {
                                        console.log('Loaded Youtube DL Exec Version ' + v)
                                    }

                                    fetch('ytdl-core', (e, v) => {
                                        if (e) {
                                            console.error(e)
                                        } else {
                                            console.log('Loaded YTDL Core Version ' + v)
                                        }

                                        fetch('yt-search', (e, v) => {
                                            if (e) {
                                                console.error(e)
                                            } else {
                                                console.log('Loaded YT Search Version ' + v)
                                            }

                                            fetch('mongodb', (e, v) => {
                                                if (e) {
                                                    console.error(e)
                                                } else {
                                                    console.log('Loaded MongoDB Version ' + v)
                                                }

                                                fetch('version', (e, v) => {
                                                    if (e) {
                                                        console.error(e)
                                                    } else {
                                                        console.log('Loaded Package Version Detector Version ' + v)
                                                    }

                                                    fetch('dotenv', (e, v) => {
                                                        if (e) {
                                                            console.error(e)
                                                        } else {
                                                            console.log('Loaded Dotenv Version ' + v)
                                                        }

                                                        fetch('libsodium-wrappers', (e, v) => {
                                                            if (e) {
                                                                console.error(e)
                                                            } else (
                                                                console.log('Loaded LibSodium Wrappers Version ' + v)
                                                            )

                                                            fetch('utf-8-validate', (e, v) => {
                                                                if (e) {
                                                                    console.error(e)
                                                                } else {
                                                                    console.log('Loaded UTF 8 Validate Version ' + v)
                                                                }

                                                                fetch('eslint', (e, v) => {
                                                                    if (e) {
                                                                        console.error(e)
                                                                    } else {
                                                                        console.log('Loaded ESLint Version ' + v)
                                                                    }

                                                                    fetch('eslint-plugin-react', (e, v) => {
                                                                        if (e) {
                                                                            console.error(e)
                                                                        } else {
                                                                            console.log('Loaded ESLint Plugin React Version ' + v)
                                                                        }


                                                                        fetch('images-scraper', (e, v) => {
                                                                            if (e) {
                                                                                console.error(e)
                                                                            } else {
                                                                                console.log('Loaded Images Scraper Version ' + v)
                                                                            }

                                                                            fetch('request-promise-native', (e, v) => {
                                                                                if (e) {
                                                                                    console.error(e)
                                                                                } else {
                                                                                    console.log('Loaded Request Promise Native Version ' + v)
                                                                                }

                                                                                fetch('node', (e, v) => {
                                                                                    if (e) {
                                                                                        console.error(e)
                                                                                    } else {
                                                                                        console.log('Loaded Node Version ' + v)
                                                                                    }

                                                                                    fetch('node-fetch', (e, v) => {
                                                                                        if (e) {
                                                                                            console.error(e)
                                                                                        } else {
                                                                                            console.log('Loaded Node Fetch Version ' + v)
                                                                                        }

                                                                                        fetch('node-pre-gyp', (e, v) => {
                                                                                            if (e) {
                                                                                                console.error(e)
                                                                                            } else {
                                                                                                console.log('Loaded Node Pre GYP Version ' + v)
                                                                                            }

                                                                                            fetch('npm', (e, v) => {
                                                                                                if (e) {
                                                                                                    console.error(e)
                                                                                                } else {
                                                                                                    console.log('Loaded NPM Version ' + v)
                                                                                                }

                                                                                                fetch('yarn', (e, v) => {
                                                                                                    if (e) {
                                                                                                        console.error(e)
                                                                                                    } else {
                                                                                                        console.log('Loaded Yarn Version ' + v)
                                                                                                    }

                                                                                                    fetch('python', (e, v) => {
                                                                                                        if (e) {
                                                                                                            console.error(e)
                                                                                                        } else {
                                                                                                            console.log('Loaded Python Version ' + v)
                                                                                                        }

                                                                                                        fetch('minecraft-server-util', (e, v) => {
                                                                                                            if (e) {
                                                                                                                console.error(e)
                                                                                                            } else {
                                                                                                                console.log('Loaded Minecraft Server Util Version ' + v)
                                                                                                            }
                                                                                                            console.log('\n===============================================================================\n')
                                                                                                            client.login(process.env.Token)
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
                })
            })
        })
    })
}
