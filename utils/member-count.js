module.exports = client => {
    const channelID = '776563080451981332' //channelID

    const updateMembers = guild => {
        const channel = guild.channels.cache.get(channelID)

        channel.setName(`Members: ${guild.memberCount.toLocaleString()}`)
    }

    client.on('guildMemberAdd', member => updateMembers(member.guild))
    client.on('guildMemberRemove', member => updateMembers(member.guild))

    const guild = client.guilds.cache.get('768083671193747486') //ServerID
    updateMembers(guild)
}