const Discord = require('discord.js')
const config = require('../../config.json')

module.exports = {
    commands: ['help', 'hilfe'],
    maxArgs: 0, 
    callback: (message) => {

        const { prefix } = config

        const helpEmbed = new Discord.MessageEmbed()

            .setAuthor('Leksa', 'https://wheedesign.com/img/design/13459094.png')
            .setColor('#a9f2e5')
            .setTitle('【H】【E】【L】【P】')
            .setThumbnail('https://media.giphy.com/media/AXOdttXiL8MeI/giphy.gif')
            .setDescription(`  **Ｓ𝐞яν𝒆𝐫**  :   ** ${message.member.guild.name} **
            ˜”*°••°*”˜˜”*°••°*”˜˜”*°••°*”˜˜”*°••°*”˜˜”*°••°*”˜˜”*°••°*”˜˜”*°••°*”˜

            **${prefix}ahelp** -- Admin Befehle
            **${prefix}info** -- Zeigt Server Infos an
            **${prefix}ping** -- Zeigt deinen und den Bots Ping an
            **${prefix}add <num1> <num2>** -- rechnet 2 zahlen zusammen
            **${prefix}cticket** -- eröffne ein Ticket
            **${prefix}meme -- Zeigt Random Memes an
            **${prefix}suggestion <Text>** -- mache einen Vorschlag im Suggestion Channel\n
            **${prefix}cases <Land>** -- covid Status Verfügbare Länder:
            germany, poland, united-kingdom, italy, united-states, denmark, russia, france, austria (österreich), luxembourg, switzerland,
            czech-republic, netherlands, belgium\n
            `)
            .setTimestamp(message.createdTimestamp)
            .setFooter('mc.trikru.de', 'https://wheedesign.com/img/design/13459094.png');

        message.reply(helpEmbed).then(sentMessage => {
            sentMessage.delete({ timeout: 50000 })
        })

    },
    requiredRoles: ['Member'],
}