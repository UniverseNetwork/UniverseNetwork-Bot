var { get } = require('request-promise-native'),
    Scraper = require('images-scraper'),
    google = new Scraper({
        puppeteer: {
            headless: true
        }
    }),
    { Message, Client } = require('discord.js'),
    report = require('../Functions/report')
module.exports = {
    name: 'search',
    description: 'Search image from google',
    /**
     * @param {Message} message
     * @param {String[]} args 
     * @param {*} MessageEmbed 
     * @param {*} wh 
     * @param {*} Prefix 
     * @param {*} Icon 
     * @param {Client} client
     */
    async execute(message, args, MessageEmbed, wh, Prefix, Icon, client) {
        message.delete()
        const query = args.slice(1).join(' '),
            type = args[0]?.toLowerCase();

        if (type === 'google') {
            let options = {
                username: 'UniversNetwork Google Searching System',
                avatarURL: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png'
            }

            if (!query) return wh.send(':exclamation: **Kamu Perlu Menyertakan Nama Gambar Yang Ingin Dicari!**', options)

            await wh.send(`:mag_right: **Mencari** \`${query}\``, options).then(async msg => {
                const image_result = await google.scrape(query, 1)
                msg.delete().then(wh.send({
                    username: options.username,
                    avatarURL: options.avatarURL,
                    embeds: [new MessageEmbed()
                        .setColor('RANDOM')
                        .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                        .setTitle('**Prefix:** `' + Prefix + '`')
                        .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + '>\n\u200B\n\u200B')
                        .addField('Hasil Pencarian Gambar', `\`${query}\``)
                        .setImage(image_result[0].url)
                        .setFooter('Made By ARVIN3108 ID', Icon)]
                }))
            })
        } else if (type === 'kitsu') {
            let options = {
                username: 'UniversNetwork Kitsu Searching System',
                avatarURL: 'https://avatars.githubusercontent.com/u/7648832?s=280&v=4'
            }, example = ['tenki no ko', 'kimi no na wa', 'sword art online', 'a whisker away', 'konosuba', 'gotoubun no hanayome'];

            if (!query) return wh.send(`:exclamation: **Harap Masukkan Nama Anime/Manga Yang Ingin Dicari!**\nContoh: \`${Prefix}search kitsu ${example[Math.floor(Math.random() * example.length)]}\``, options)

            await wh.send(`:mag_right: **Mencari** \`${query}\``, options).then(async msg => {
                msg.delete()
                await get({
                    url: `https://kitsu.io/api/edge/anime?filter[text]=${query}`,
                    method: `GET`,
                    headers: {
                        'Content-Type': "application/vnd.api+json",
                        'Accept': "application/vnd.api+json"
                    },
                    json: true
                }).then(body => {
                    try {
                        let tipetayang = body.data[0].attributes.subtype,
                            statuspembuatan = body.data[0].attributes.status,
                            yt = body.data[0].attributes.youtubeVideoId,
                            endDate = body.data[0].attributes.endDate,
                            coverImage = body.data[0].attributes.coverImage,
                            nsfw = body.data[0].attributes.nsfw;
                        nsfw = nsfw == false ? 'Tidak' : 'Ya';
                        coverImage = coverImage == null ? null : body.data[0].attributes.coverImage.original;
                        endDate = endDate == null ? "***Tidak Diketahui***" : `**${endDate}**`;
                        statuspembuatan = statuspembuatan == "finished" ? "Selesai" : "Dalam Pembuatan";
                        tipetayang = tipetayang == "movie" ? "Movie" : "TV";
                        yt = yt == null ? "*Tidak Tersedia*" : `https://youtu.be/${yt}`;
                        wh.send({
                            username: options.username,
                            avatarURL: options.avatarURL,
                            embeds: [new MessageEmbed()
                                .setTitle('**Prefix:** `' + Prefix + '`')
                                .setColor('RANDOM')
                                .setThumbnail(body.data[0].attributes.posterImage.original)
                                .setImage(coverImage)
                                .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                                .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + '>\n\n\n\u200B' + `**[${body.data[0].attributes.titles.en_jp}](https://kitsu.io/anime/${body.data[0].id})**\n${body.data[0].attributes.synopsis}`)
                                .addField(':hourglass_flowing_sand: **Status Pembuatan**', statuspembuatan, true)
                                .addField(':dividers: **Tipe Tayang**', tipetayang, true)
                                .addField(':exclamation: **NSFW**', nsfw, true)
                                .addField(':movie_camera: **Trailer**', yt)
                                .addField(':calendar_spiral: **Waktu Tayang**', `Dari **${body.data[0].attributes.startDate}** Hingga **${endDate}**`)
                                .addField(':minidisc: **Total Episode**', body.data[0].attributes.episodeCount, true)
                                .addField(':star: **Rating Rata-Rata**', `**${body.data[0].attributes.averageRating}/100**`, true)
                                .addField(':busts_in_silhouette: **Jumlah Penonton**', body.data[0].attributes.userCount)
                                .addField(':sparkling_heart: **Jumlah Penonton Favorit**', body.data[0].attributes.favoritesCount)
                                .addField(':trophy: **Peringkat Rating**', `**TOP ${body.data[0].attributes.ratingRank}**`, true)
                                .addField(':trophy: **Peringkat Popularitas**', `**TOP ${body.data[0].attributes.popularityRank}**`, true)
                                .setFooter('Made By ARVIN3108 ID', Icon)]
                        })
                    } catch (e) {
                        report('Kitsu Error', e)
                        return wh.send(`:x: **Anime** \`${query}\` **Tidak Dapat Ditemukan!**`, options)
                    }
                })
            })
        } else if (type === 'urbandictionary') {
            let options = {
                username: 'UniversNetwork UrbanDictionary Searching System',
                avatarURL: 'https://media-exp1.licdn.com/dms/image/C560BAQFe1nim1QolmA/company-logo_200_200/0/1562877451000?e=2159024400&v=beta&t=kvqz_uDREJwFArRZ-xMQ-uii1BMcfZXZpnjuIFXhBAA'
            }, example = ['white lady', 'hello world', 'hi'];

            if (!query) return wh.send(':exclamation: **Kamu Perlu Menyertakan Nama Urban Yang Ingin Dicari!**', options)

            await wh.send(`:mag_right: **Mencari** \`${query}\``, options).then(async msg => {
                msg.delete()
                await get({
                    url: `https://api.urbandictionary.com/v0/define?term=${query}`,
                    method: `GET`,
                    headers: {
                        'Content-Type': "application/vnd.api+json",
                        'Accept': "application/vnd.api+json"
                    },
                    json: true
                }).then(body => {
                    try {
                        wh.send({
                            username: options.username,
                            avatarURL: options.avatarURL,
                            embeds: [new MessageEmbed()
                                .setTitle('**Prefix:** `' + Prefix + '`')
                                .setColor('RANDOM')
                                .setFooter('Made By ARVIN3108 ID', Icon)
                                .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                                .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + '>\n\n\n\u200B' + `**[${body.list[0].word}](${body.list[0].permalink})**\n${body.list[0].definition}\n\n**Example**\n` + body.list[0].example)
                                .addField('**Author**', body.list[0].author)
                                .addField(':+1:', body.list[0].thumbs_up, true)
                                .addField(':-1:', body.list[0].thumbs_down, true)
                            ]
                        })
                    } catch {
                        wh.send(`:x: **Urban \`${query}\` Tidak Dapat Ditemukan!**`, options)
                    }
                })
            })
        } else if (type === 'pokemon') {
            let options = {
                username: 'UniversNetwork PokeAPI Searching System',
                avatarURL: 'https://pokeapi.co/static/pokeapi_256.888baca4.png'
            }

            if (!query) return wh.send(':exclamation: **Kamu Perlu Menyertakan Nama Pokemon Yang Ingin Dicari!**', options)

            await wh.send(`:mag_right: **Mencari** \`${query}\``, options).then(async msg => {
                msg.delete()
                await get({
                    url: `https://pokeapi.co/api/v2/pokemon/${query}`,
                    method: `GET`,
                    headers: {
                        'Content-Type': "application/vnd.api+json",
                        'Accept': "application/vnd.api+json"
                    },
                    json: true
                }).then(async body => {
                    try {
                        await wh.send({
                            username: options.username,
                            avatarURL: options.avatarURL,
                            embeds: [new MessageEmbed()
                                .setTitle('**Prefix:** `' + Prefix + '`')
                                .setColor('RANDOM')
                                .setFooter('Made By ARVIN3108 ID', Icon)
                                .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                            ]
                        })
                    } catch {
                        wh.send(`:x: **Pokemon \`${query}\` Tidak Dapat Ditemukan!**`, options)
                    }
                })
            })

        } else return message.channel.send(new MessageEmbed()
            .setTitle('**Prefix:** `' + Prefix + '`')
            .setColor('#fbff00')
            .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
            .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + '>\n\n\u200B')
            .addField('\u200B', '\u200B', true)
            .addField('List Of Search Commands', '\u200B', true)
            .addField('\u200B', '\u200B', true)
            .addField(`\`${Prefix}search google <nama gambar>\``, 'Untuk Mencari Gambar Di Google')
            .addField(`\`${Prefix}search kitsu <nama anime/manga>\``, 'Untuk Mencari Anime/Manga Di Kitsu')
            .addField(`\`${Prefix}search urbandictionary <nama urban>\``, 'Untuk Mencari Urban Di UrbanDictionary')
            .addField('\u200B\n:memo: Catatan', '**Jika kata berkurung `<>`**\nMaka sifatnya wajib di isi!\n\n**Jika kata berkurung `[]`**\nMaka sifatnya tidak harus di isi!')
            .setFooter('Made By ARVIN3108 ID', Icon))
    }
}