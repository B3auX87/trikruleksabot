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
            **${prefix}setwelcome <Text>** -- legt den WillkommensChannel, und die
            Willkommens Nachricht fest (nutze <@> um Join Member zu Taggen, gebe den Befehl im richtigen Channel ein)\n
            **${prefix}addbal <@name>** -- füge einen Member Coins hinzu
            **${prefix}warn <@name> <Grund>** -- Verwarne Member
            **${prefix}lw <@name>** -- listet verwarnungen von Member auf
            `)
            .setTimestamp(message.createdTimestamp)
            .setFooter('mc.trikru.de', 'https://wheedesign.com/img/design/13459094.png');

        message.reply(helpEmbed).then(sentMessage => {
            sentMessage.delete({ timeout: 50000 })
        })

    },
    permissions: 'ADMINISTRATOR',
}