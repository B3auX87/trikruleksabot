const Discord = require('discord.js')

module.exports = {
    commands: 'cembed',
    minArgs: 3,
    maxArgs: 3,
    expectedArgs: '<Titel> <Text> <#HexColor>',
    permissions: 'ADMINISTRATOR',
    callback: async (message, args) => {

        const avatar = message.author.displayAvatarURL({ dynamic: true, format: 'png' })
        const Embed = new Discord.MessageEmbed()

            .setTitle(args[0])
            .setDescription(args[1])
            .setColor(args[2])
            .setThumbnail(`${avatar}`)
            .setFooter(`${message.author.username}`)
            .setTimestamp(message.setTimestamp)

        message.reply(Embed)

    }
}