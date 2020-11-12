const path = require('path')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

const command = require('./utils/command')
const memberCount = require('./utils/member-count')
const messageCount = require('./utils/message-counter')
const mongo = require('./mongo')
const welcome = require('./welcome')

client.setMaxListeners(Infinity)

client.on('ready', async () => {

    console.log('Leksa is ready!')

    const baseFile = 'command-Base.js'
    const commandBase = require(`./commands/${baseFile}`)

    const readCommands = (dir) => {
        const files = fs.readdirSync(path.join(__dirname, dir))
        for (const file of files) {
            const stat = fs.lstatSync(path.join(__dirname, dir, file))
            if (stat.isDirectory()) {
                readCommands(path.join(dir, file))
            } else if (file !== baseFile) {
                const option = require(path.join(__dirname, dir, file))
                commandBase(client, option)
            }
        }
    }

    readCommands('commands')

    await mongo().then((mongoose) => {

        try {
            console.log('Connected to mongo!')
        } finally {
            mongoose.connection.close()
        }

    })

    memberCount(client)
    welcome(client)
    messageCount(client)

    command(client, 'eval', (message) => {

        const oID = '767836880896524288' //OwnerID Discord
        const cID = '775045299038060594' //ChannelID Private
        const { member, channel, content } = message

        if (member.id === oID && channel.id === cID) {
            const result = eval(content.replace('.eval ', ''))
            const evalembed = new Discord.MessageEmbed()

                .setAuthor('Leksa', 'https://wheedesign.com/img/design/13459094.png')
                .setColor()
                .setTitle('【E】【V】【A】【L】')
                .setThumbnail('https://media.giphy.com/media/IvV2SJ6ukwsAEI9lBa/giphy.gif')
                .setDescription('Simpler Taschenrechner')
                .addField('ᖇEᔕᑌᒪT 🌐 :', `${result}`, true)
                .setTimestamp(message.createdTimestamp)
                .setFooter('mc.trikru.de', 'https://wheedesign.com/img/design/13459094.png');

            message.reply(evalembed).then(sentMessage => {
                sentMessage.delete({ timeout: 8000 })
            })

        } else {

            const evalNoEmbed = new Discord.MessageEmbed()

                .setAuthor('Leksa', 'https://wheedesign.com/img/design/13459094.png')
                .setColor()
                .setTitle('【ＮＯＰＥ】')
                .setThumbnail('https://media.giphy.com/media/g4UAqGuShn2P1TC3Nf/giphy.gif')
                .setDescription(`  **Ｓ𝐞яν𝒆𝐫**  :   ••¤ ${message.member.guild.name} ¤••`)
                .addField('🟥', 'Entweder du bist nicht der Owner oder du bist im Falschen Channel', true)
                .addField('Owner: ', `${oID}`, true)
                .addField('Channel', `${cID}`, true)
                .setTimestamp(message.createdTimestamp)
                .setFooter('mc.trikru.de', 'https://wheedesign.com/img/design/13459094.png');

            message.reply(evalNoEmbed).then(sentMessage => {
                sentMessage.delete({ timeout: 6500 })
            })
        }
    })

    command(client, 'status', (message) => {

        const content = message.content.replace('.status', '')

        client.user.setPresence({
            activity: {
                name: content,
                type: 0,
            },
        })
    })

    command(client, 'ban', (message) => {

        const { member, mentions } = message
        const tag = `<@${member.id}>`

        if (member.hasPermission('ADMINISTRATOR') || member.hasPermission('BAN_MEMBERS')) {
            const target = mentions.users.first()

            if (target) {
                const targetMember = message.guild.members.cache.get(target.id)

                targetMember.ban()


                const banEmbed = new Discord.MessageEmbed()

                    .setAuthor('Leksa', 'https://wheedesign.com/img/design/13459094.png')
                    .setColor()
                    .setTitle('【B】【A】【N】')
                    .setThumbnail('https://media.giphy.com/media/fe4dDMD2cAU5RfEaCU/giphy.gwif')
                    .setDescription(`  **Ｓ𝐞яν𝒆𝐫**  :   ••¤ ${message.member.guild.name} ¤••`)
                    .addField('🟢 Command User:', `${tag}`, true)
                    .addField('🔴 Banned User:', `${targetMember}`, true)
                    .setTimestamp(message.createdTimestamp)
                    .setFooter('mc.trikru.de', 'https://wheedesign.com/img/design/13459094.png');

                message.reply(banEmbed)

            } else {
                message.channel.send(`${tag} Du musst jemanden angeben (bsp. @Name)`)
            }

        } else {
            const banNoEmbed = new Discord.MessageEmbed()

                .setAuthor('Leksa', 'https://wheedesign.com/img/design/13459094.png')
                .setColor()
                .setTitle('【ＮＯＰＥ】')
                .setThumbnail('https://media.giphy.com/media/g4UAqGuShn2P1TC3Nf/giphy.gif')
                .setDescription(`  **Ｓ𝐞яν𝒆𝐫**  :   ••¤ ${message.member.guild.name} ¤••`)
                .addField('🟥', 'Du hast keine Berechtigung dazu', true)
                .setTimestamp(message.createdTimestamp)
                .setFooter('mc.trikru.de', 'https://wheedesign.com/img/design/13459094.png');

            message.reply(banNoEmbed).then(sentMessage => {
                sentMessage.delete({ timeout: 6500 })
            })
        }

    })

    command(client, 'kick', (message) => {

        const { member, mentions } = message
        const tag = `<@${member.id}>`

        if (member.hasPermission('ADMINISTRATOR') || member.hasPermission('KICK_MEMBERS')) {
            const target = mentions.users.first()

            if (target) {
                const targetMember = message.guild.members.cache.get(target.id)

                targetMember.kick()

                const kickEmbed = new Discord.MessageEmbed()

                    .setAuthor('Leksa', 'https://wheedesign.com/img/design/13459094.png')
                    .setColor()
                    .setTitle('【K】【I】【C】【K】')
                    .setThumbnail('https://64.media.tumblr.com/3356ce0a41ba251ce30e39e01ca06771/tumblr_o0t536PZNF1qjzdvgo5_500.gif')
                    .setDescription(`  **Ｓ𝐞яν𝒆𝐫**  :   ••¤ ${message.member.guild.name} ¤••`)
                    .addField('🟢 Command User:', `${tag}`, true)
                    .addField('🔴 Kicked User:', `${targetMember}`, true)
                    .setTimestamp(message.createdTimestamp)
                    .setFooter('mc.trikru.de', 'https://wheedesign.com/img/design/13459094.png');

                message.reply(kickEmbed)

            } else {
                message.channel.send(`${tag} Du musst jemanden angeben (bsp. @Name)`)
            }

        } else {
            const kickNoEmbed = new Discord.MessageEmbed()

                .setAuthor('Leksa', 'https://wheedesign.com/img/design/13459094.png')
                .setColor()
                .setTitle('【ＮＯＰＥ】')
                .setThumbnail('https://media.giphy.com/media/g4UAqGuShn2P1TC3Nf/giphy.gif')
                .setDescription(`  **Ｓ𝐞яν𝒆𝐫**  :   ••¤ ${message.member.guild.name} ¤••`)
                .addField('🟥', 'Du hast keine Berechtigung dazu', true)
                .setTimestamp(message.createdTimestamp)
                .setFooter('mc.trikru.de', 'https://wheedesign.com/img/design/13459094.png');

            message.reply(kickNoEmbed).then(sentMessage => {
                sentMessage.delete({ timeout: 6500 })
            })
        }

    })

})

client.login(config.token)