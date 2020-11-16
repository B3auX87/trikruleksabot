const Discord = require('discord.js')

module.exports = {
    commands: ['ban', 'punish'],
    expectedArgs: '<@name>',
    minArgs: 1,
    maxArgs: 1,
    permissions: ['ADMINISTRATOR', 'BAN_MEMBERS'],
    callback: (message, arguments) => {
        const { member, mentions } = message
        const tag = `<@${member.id}>`

        const target = mentions.users.first()
        const targetMember = message.guild.members.cache.get(target.id)

        targetMember.ban()

        const banEmbed = new Discord.MessageEmbed()

            .setAuthor('Leksa', 'https://wheedesign.com/img/design/13459094.png')
            .setColor('#ff3f76')
            .setTitle('【B】【A】【N】')
            .setThumbnail('https://media.giphy.com/media/fe4dDMD2cAU5RfEaCU/giphy.gif')
            .setDescription(`  **Ｓ𝐞яν𝒆𝐫**  :   ••¤ ${message.member.guild.name} ¤••`)
            .addFields(
                {
                    name: '🟢 Command User:',
                    value: `${tag}`,
                },
                {
                    name: '🔴 Banned User:',
                    value: `${targetMember}`,
                },
            )
            .setTimestamp(message.createdTimestamp)
            .setFooter('mc.trikru.de', 'https://wheedesign.com/img/design/13459094.png');

        message.reply(banEmbed).then(sentMessage => {
            sentMessage.delete({ timeout: 15000 })
        })

    }
}