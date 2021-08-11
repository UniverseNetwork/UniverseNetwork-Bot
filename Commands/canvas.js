const Canvas = require('canvas'),
    path = require('path');
module.exports = {
    name: 'canvas',
    description: 'To preview a canvas',
    async execute(message, MessageAttachment) {
        const canvas = Canvas.createCanvas(700, 362),
            ctx = canvas.getContext('2d'),
            backgrounds = [
                '../backgrounds/1.png',
                '../backgrounds/2.png',
                '../backgrounds/3.png',
                '../backgrounds/4.png',
                '../backgrounds/5.png'
            ],
            // Load the background image and draw it to the canvas
            background = await Canvas.loadImage(
                path.join(__dirname, backgrounds[Math.floor(Math.random() * backgrounds.length)])
            );
        let x = 0
        let y = 0
        ctx.drawImage(background, x, y)
        // Load the user's profile picture and draw it
        const pfp = await Canvas.loadImage(
            message.member.user.displayAvatarURL({
                format: 'png'
            })
        )
        x = canvas.width / 2 - pfp.width / 2
        y = 70
        ctx.drawImage(pfp, x, y)
        // Display user text
        ctx.fillStyle = '#fffff' // White text
        ctx.font = '35px sans-quicksand'
        let text = `Welcome ${message.author.tag}!`
        x = canvas.width / 2 - ctx.measureText(text).width / 2
        ctx.fillText(text, x, 115 + pfp.height)
        // Display member count
        ctx.fillStyle = '#ffffff'
        ctx.font = '30px sans-quicksand'
        text = `Member #${message.member.guild.memberCount}`
        x = canvas.width / 2 - ctx.measureText(text).width / 2
        ctx.fillText(text, x, 155 + pfp.height)
        // Attach the image to a message and send it
        const attachment = new MessageAttachment(canvas.toBuffer())
        message.channel.send(`${message.author}, Selamat Datang Di **UniversNetwork**`, attachment)
    }
}