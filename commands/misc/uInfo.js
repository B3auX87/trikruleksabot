const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['userinfo', 'uinfo'],
    minArgs: 1,
    maxArgs: 1,
    expectedArgs: '<@name>',
    callback: async (message) => {

        const { guild, channel } = message

        const user = message.mentions.users.first() || message.member.user
        const member = guild.members.cache.get(user.id)

        console.log(member)

        const embed = new MessageEmbed()
            .setAuthor(`User info von ${user.username}`, user.displayAvatarURL())
            .setColor('#dd5d5d')
            .addFields(
                {
                    name: '●► Member tag',
                    value: user.tag,
                },
                {
                    name: '●► Ist Bot',
                    value: user.bot,
                },
                {
                    name: '●► Nickname',
                    value: member.nickname || 'None',
                },
                {
                    name: '●► Joined Server',
                    value: new Date(member.joinedTimestamp).toLocaleDateString(),
                },
                {
                    name: '●► Joined Discord',
                    value: new Date(user.createdTimestamp).toLocaleDateString(),
                },
                {
                    name: '●► Roles',
                    value: member.roles.cache.size - 1,
                }
            )

        channel.send(embed)
    },
    
    permissions: 'ADMINISTRATOR',

}