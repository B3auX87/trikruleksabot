const Discord = require('discord.js')
const mongo = require('./mongo')
const command = require('./utils/command')
const welcomeShema = require('./schemas/welcome-schema')

module.exports = (client) => {
    const cache = {}

    command(client, 'setwelcome', async (message) => {
        const { member, channel, content, guild } = message

        if (!member.hasPermission('ADMINISTRATOR')) { 
            const swNOEmbed = new Discord.MessageEmbed()

                .setAuthor('Leksa', 'https://wheedesign.com/img/design/13459094.png')
                .setColor()
                .setTitle('【ＮＯＰＥ】')
                .setThumbnail('https://media.giphy.com/media/g4UAqGuShn2P1TC3Nf/giphy.gif')
                .setDescription(`  **Ｓ𝐞яν𝒆𝐫**  :   ••¤ ${message.member.guild.name} ¤••`)
                .addField('🟥', 'Du hast keine Berechtigung dazu', true)
                .setTimestamp(message.createdTimestamp)
                .setFooter('mc.trikru.de', 'https://wheedesign.com/img/design/13459094.png');

            message.reply(swNOEmbed).then(sentMessage => {
                sentMessage.delete({ timeout: 6500 })
            })
            return
        }

        let text = content
        const split = text.split(' ')

        if (split.length < 2) {
            channel.send('Bitte gebe eine Wilkommens Nachricht an!')
            return
        }

        split.shift()
        text = split.join(' ')
        cache[guild.id] = [channel.id, text]

        await mongo().then(async mongoose => {

            try {

                mongoose.set('useFindAndModify', false)
                await welcomeShema.findOneAndUpdate({
                    _id: guild.id
                }, {
                    _id: guild.id,
                    channelID: channel.id,
                    text,
                }, {
                    upsert: true
                })

            } finally {

                mongoose.connection.close()
            }
        })

    })

    const onJoin = async member => {
        const { guild } = member
        let data = cache[guild.id]

        if (!data) {
            console.log('FETCHING FROM DATABASE')
            await mongo().then(async mongoose => {

                try {

                    const result = await welcomeShema.findOne({ _id: guild.id })
                    cache[guild.id] = data = [result.channelID, result.text]
                } finally {

                    mongoose.connection.close()
                }
            })
        }

        const channelID = data[0]
        const text = data[1]
        const channel = guild.channels.cache.get(channelID)

        channel.send(text.replace(/<@>/g, `<@${member.id}>`))
    }

    command(client, 'simjoin', message => {
        onJoin(message.member)
    })

    client.on('guildMemberAdd', member => {
        onJoin(member)
    })
}