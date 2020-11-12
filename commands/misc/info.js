const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
    commands: 'info',
    minArgs: 0,
    maxArgs: 0, 
    callback: (message) => {

        client.guilds.cache.forEach((guild) => {
            const { name, region, memberCount, owner } = guild
            const serverEmbed = new Discord.MessageEmbed()

                .setAuthor('Leksa', 'https://wheedesign.com/img/design/13459094.png')
                .setColor()
                .setTitle('【I】【N】【F】【O】')
                .setThumbnail('https://media.giphy.com/media/IeizWjAsLMsFO/giphy.gif')
                .setDescription(`  **Ｓ𝐞яν𝒆𝐫**  :   ••¤ ${guild.name} ¤••`)
                .addField('Ｓ𝐞яν𝒆𝐫 Member:', `${guild.memberCount} / ${guild.maximumMembers}`, true)
                .addField('Ｓ𝐞яν𝒆𝐫 ID:', `${guild.id}`, true)
                .addField('Ｓ𝐞яν𝒆𝐫 Owner :', `${guild.owner.user.tag}`, true)
                .addField('Ｓ𝐞яν𝒆𝐫 Region:', `${guild.region}`, true)
                .setTimestamp(message.createdTimestamp)
                .setFooter('mc.trikru.de', 'https://wheedesign.com/img/design/13459094.png');

            message.channel.send(serverEmbed).then(sentMessage => {
                sentMessage.delete({ timeout: 15000 })
            })
        })
    },
    requiredRoles: ['Member'],
}