const Discord = require('discord.js')

module.exports = {
    commands: 'kick',
    expectedArgs: '<@name>',
    minArgs: 1,
    maxArgs: 1,
    permissions: ['ADMINISTRATOR', 'KICK_MEMBERS'],
    callback: (message, arguments) => {
        const { member, mentions } = message
        const tag = `<@${member.id}>`
        const target = mentions.users.first()
        const targetMember = message.guild.members.cache.get(target.id)
        
        targetMember.kick()

        const kickEmbed = new Discord.MessageEmbed()

            .setAuthor('Leksa', 'https://wheedesign.com/img/design/13459094.png')
            .setColor('#f47996')
            .setTitle('【K】【I】【C】【K】')
            .setThumbnail('https://64.media.tumblr.com/3356ce0a41ba251ce30e39e01ca06771/tumblr_o0t536PZNF1qjzdvgo5_500.gif')
            .setDescription(`  **Ｓ𝐞яν𝒆𝐫**  :   ••¤ ${message.member.guild.name} ¤••`)
            .addField('🟢 Command User:', `${tag}`, true)
            .addField('🔴 Kicked User:', `${targetMember}`, true)
            .setTimestamp(message.createdTimestamp)
            .setFooter('mc.trikru.de', 'https://wheedesign.com/img/design/13459094.png');

        message.reply(kickEmbed).then(sentMessage => {
            sentMessage.delete({ timeout: 6500 })
        })
    }
}