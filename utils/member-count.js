module.exports = client => {
    const channelID = '775846408913682452' //channelID

    const updateMembers = guild => {
        const channel = guild.channels.cache.get(channelID)

        channel.setName(`Members: ${guild.memberCount.toLocaleString()}`)
    }

    client.on('guildMemberAdd', member => updateMembers(member.guild))
    client.on('guildMemberRemove', member => updateMembers(member.guild))

    const guild = client.guilds.cache.get('774643282759647232') //ServerID
    updateMembers(guild)
}