const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
    commands: 'ping', 
    minArgs: 0, 
    maxArgs: 0, 
    callback: (message) => {

        const pingembed = new Discord.MessageEmbed()

            .setAuthor('Leksa', 'https://wheedesign.com/img/design/13459094.png')
            .setColor()
            .setTitle('【P】【I】【N】【G】')
            .setThumbnail('https://media.giphy.com/media/Kjqyc7spzgOK4/giphy.gif')
            .setDescription('Dein Ping und der Ping vom Bot')
            .addField('Dein Ping ☢', `${Date.now() - message.createdTimestamp} ms`, true)
            .addField('Leksa Ping ☣', `${Math.round(client.ws.ping)} ms`, true)
            .setTimestamp(message.createdTimestamp)
            .setFooter('mc.trikru.de', 'https://wheedesign.com/img/design/13459094.png');

        message.channel.send(pingembed).then(sentMessage => {
            sentMessage.delete({ timeout: 6500 })
        })
    },
    requiredRoles: ['Member'],
}