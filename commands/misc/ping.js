const Discord = require('discord.js')

module.exports = {
    commands: 'ping',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text, client) => {

        message.channel.send('Calculating Ping...\n\n').then(resultMessage => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp
            const pingembed = new Discord.MessageEmbed()

                .setAuthor('Leksa', 'https://wheedesign.com/img/design/13459094.png')
                .setColor('#e5fbdb')
                .setTitle('【P】【I】【N】【G】')
                .setThumbnail('https://media.giphy.com/media/Kjqyc7spzgOK4/giphy.gif')
                .setDescription('Dein Ping und der Ping vom Bot')
                .addFields(
                    {
                        name: '🌏 Server Ping :',
                        value: `↳ ${client.ws.ping} ms`,
                    },
                    {
                        name: '🌍 Bot Ping :',
                        value: `↳ ${ping} ms`,
                    },
                )
                .setTimestamp(message.createdTimestamp)
                .setFooter('mc.trikru.de', 'https://wheedesign.com/img/design/13459094.png');

            resultMessage.edit(pingembed).then(sentMessage => {
                sentMessage.delete({ timeout: 8000 })
            })
        })

    },
    requiredRoles: ['Member'],
}