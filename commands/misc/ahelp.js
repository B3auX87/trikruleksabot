
const Discord = require('discord.js')
const config = require('../../config.json')

module.exports = {
    commands: ['ahelp', 'ahilfe'],
    minArgs: 0, 
    maxArgs: 0, 
    callback: (message) => {

        const { prefix } = config

        const helpEmbed = new Discord.MessageEmbed()

            .setAuthor('Leksa', 'https://wheedesign.com/img/design/13459094.png')
            .setColor('#a9f2e5')
            .setTitle('【A】【H】【E】【L】【P】')
            .setThumbnail('https://media.giphy.com/media/phJ6eMRFYI6CQ/giphy.gif')
            .setDescription(`  **Ｓ𝐞яν𝒆𝐫**  :   ** ${message.member.guild.name} **
            ˜”*°••°*”˜˜”*°••°*”˜˜”*°••°*”˜`)
            .addFields(
                {
                    name: `✻ **${prefix}cc oder [${prefix}purge]**`,
                    value: '》 Lösche die Nachrichten (Pins ausgenommen!)',
                },
                {
                    name: `✻ **${prefix}status <Text>**`,
                    value: '》 Setze die Activity vom Bot',
                },
                {
                    name: `✻ **${prefix}ban <@Name>**`,
                    value: '》 Member Bannen',
                },
                {
                    name: `✻ **${prefix}kick <@Name>**`,
                    value: '》 Member kicken',
                },
                {
                    name: `✻ **${prefix}eval <numm1 + / - / * / / num2>**`,
                    value: '》 Mathe Helper (Owner Zugang)',
                },
                {
                    name: `✻ **${prefix}invites**`,
                    value: '》 Zeigt an wer wieviel eingaladen hat',
                },
                {
                    name: `✻ **${prefix}clticket**`,
                    value: '》 Schließe ein Ticket',
                },
                {
                    name: `✻ **${prefix}cembed <titel> <Text> <#HexCode>**`,
                    value: '》 Erstelle ein Custom Embed',
                },
            )
            .setTimestamp(message.createdTimestamp)
            .setFooter('mc.trikru.de', 'https://wheedesign.com/img/design/13459094.png');

        message.reply(helpEmbed).then(sentMessage => {
            sentMessage.delete({ timeout: 50000 })
        })

    },
    permissions: 'ADMINISTRATOR',

}