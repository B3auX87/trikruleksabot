const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('../../config.json')

module.exports = {
    commands: ['ahelp', 'ahilfe'],
    minArgs: 0, 
    maxArgs: 0, 
    callback: (message) => {

        const { prefix } = config

        const helpEmbed = new Discord.MessageEmbed()

            .setAuthor('Leksa', 'https://wheedesign.com/img/design/13459094.png')
            .setColor()
            .setTitle('【A】【H】【E】【L】【P】')
            .setThumbnail('https://media.giphy.com/media/phJ6eMRFYI6CQ/giphy.gif')
            .setDescription(`  **Ｓ𝐞яν𝒆𝐫**  :   ** ${message.member.guild.name} **
            ˜”*°••°*”˜˜”*°••°*”˜˜”*°••°*”˜˜”*°••°*”˜˜”*°••°*”˜˜”*°••°*”˜˜”*°••°*”˜
            **${prefix}cc oder [${prefix}purge]** -- Lösche die Nachrichten (Pins ausgenommen!)
            **${prefix}status <Text>** -- Setze die Activity vom Bot
            **${prefix}ban <@Name>** -- Member Bannen
            **${prefix}kick <@Name>** -- Member kicken
            **${prefix}eval <Text>** -- Mathe Helper (Owner Zugang)
            **${prefix}invites** -- Zeigt an wer wieviel eingaladen hat
            **${prefix}clticket** -- Schließe ein Ticket
            **${prefix}cembed <titel> <Text> <#HexCode>** -- Erstelle ein Custom Embed
            `)
            .setTimestamp(message.createdTimestamp)
            .setFooter('mc.trikru.de', 'https://wheedesign.com/img/design/13459094.png');

        message.reply(helpEmbed).then(sentMessage => {
            sentMessage.delete({ timeout: 50000 })
        })

    },
    permissions: 'ADMINISTRATOR',
}