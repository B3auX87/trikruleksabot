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
            .setDescription(`  **Ｓ𝐞яν𝒆𝐫**  :   ••¤ ${name} ¤••
            ˜”*°••°*”˜˜”*°••°*”˜˜”*°••°*”˜`)
            addFields(
                {
                    name: '🔥 Ｓ𝐞яν𝒆𝐫 Member :',
                    value: `▪ ${memberCount}`,
                },
                {
                    name: '⛔️ AFK-Timeout :',
                    value: `▪ ${afkTimeout} / 60`,
                },
                {
                    name: '🌹 Ｓ𝐞яν𝒆𝐫 Owner :',
                    value: `▪ ${owner.user.tag}`,
                },
                {
                    name: '🌻 Ｓ𝐞яν𝒆𝐫 Region :',
                    value: `▪ ${region}`,
                },
            )
            .setTimestamp(message.createdTimestamp)
            .setFooter('mc.trikru.de', 'https://wheedesign.com/img/design/13459094.png');

        message.channel.send(serverEmbed).then(sentMessage => {
            sentMessage.delete({ timeout: 15000 })
        })

    },
    requiredRoles: ['Member'],
}