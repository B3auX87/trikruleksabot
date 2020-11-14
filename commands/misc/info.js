const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
    commands: ['info', 'serverinfo'],
    maxArgs: 0,
    callback: (message) => {

        const { guild } = message
        const { name, region, memberCount, owner, afkTimeout, maximumMembers } = guild
        const icon = guild.iconURL()

        const serverEmbed = new Discord.MessageEmbed()

            .setAuthor('Leksa', 'https://wheedesign.com/img/design/13459094.png')
            .setColor('#ddff87')
            .setTitle('【I】【N】【F】【O】')
            .setThumbnail(icon)
            .setDescription(`  **Ｓ𝐞яν𝒆𝐫**  :   ••¤ ${name} ¤••`)
            .addField('Ｓ𝐞яν𝒆𝐫 Member:', `${memberCount} / ${maximumMembers}`, true)
            .addField('AFK-Timeout:', `${afkTimeout} / 60`, true)
            .addField('Ｓ𝐞яν𝒆𝐫 Owner :', `${owner.user.tag}`, true)
            .addField('Ｓ𝐞яν𝒆𝐫 Region:', `${region}`, true)
            .setTimestamp(message.createdTimestamp)
            .setFooter('mc.trikru.de', 'https://wheedesign.com/img/design/13459094.png');

        message.channel.send(serverEmbed).then(sentMessage => {
            sentMessage.delete({ timeout: 15000 })
        })

    },
    requiredRoles: ['Member'],
}