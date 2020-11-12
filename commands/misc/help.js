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

            **${prefix}ahelp** -- Admin Befehle
            **${prefix}info** -- Zeigt Server Infos an
            **${prefix}ping** -- Zeigt deinen und den Bots Ping an
            **${prefix}add <num1> <num2>** -- rechnet 2 zahlen zusammen
            **${prefix}ticket <text>** -- eröffne ein Ticket
            **${prefix}bal [<@name>]** -- siehe deine Coins oder die eines anderen Members\n
            **${prefix}pay <@name>** -- bezahle andere Member
            `)
            .setTimestamp(message.createdTimestamp)
            .setFooter('mc.trikru.de', 'https://wheedesign.com/img/design/13459094.png');

        message.reply(helpEmbed).then(sentMessage => {
            sentMessage.delete({ timeout: 50000 })
        })

    },
    requiredRoles: ['Member'],
}