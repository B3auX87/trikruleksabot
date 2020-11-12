const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('../../config.json')

module.exports = {
    commands: ['help', 'hilfe'],
    minArgs: 0, 
    maxArgs: 0, 
    callback: (message) => {

        const { prefix } = config

        const helpEmbed = new Discord.MessageEmbed()


            .setAuthor('Leksa', 'https://wheedesign.com/img/design/13459094.png')
            .setColor()
            .setTitle('【H】【E】【L】【P】')
            .setThumbnail('https://media.giphy.com/media/AXOdttXiL8MeI/giphy.gif')
            .setDescription(`  **Ｓ𝐞яν𝒆𝐫**  :   ** ${message.member.guild.name} **
            ˜”*°••°*”˜˜”*°••°*”˜˜”*°••°*”˜˜”*°••°*”˜˜”*°••°*”˜˜”*°••°*”˜˜”*°••°*”˜
            **${prefix}cc [${prefix}purge]** -- Lösche die Nachrichten (Pins ausgenommen!)
            **${prefix}status <Text>** -- Setze die Activity vom Bot
            **${prefix}info** -- Zeigt Server Infos an
            **${prefix}ping** -- Zeigt deinen und den Bots Ping an
            **${prefix}ban <@Name>** -- Member Bannen
            **${prefix}kick <@Name>** -- Member kicken
            **${prefix}eval <Text>** -- Mathe Helper
            **${prefix}add <num1> <num2>** -- rechnet 2 zahlen zusammen
            **${prefix}invites** -- Zeigt an wer wieviel eingaladen hat
            **${prefix}setwelcome <Text>** -- legt den WillkommensChannel, und die
            Willkommens Nachricht fest (nutze <@> um Join Member zu Taggen, gebe den Befehl im richtigen Channel ein)
            `)
            .setTimestamp(message.createdTimestamp)
            .setFooter('mc.trikru.de', 'https://wheedesign.com/img/design/13459094.png');

        message.reply(helpEmbed).then(sentMessage => {
            sentMessage.delete({ timeout: 50000 })
        })

    },
    requiredRoles: ['Member'],
}