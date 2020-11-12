const path = require('path')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

const command = require('./utils/command')
const memberCount = require('./utils/member-count')
const messageCount = require('./utils/message-counter')
//const commandBase = require('./commands/command-base')
const mongo = require('./mongo')
const welcome = require('./welcome')
const polls = require('./advanced-polls')
const levels = require('./levels')

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

    //commandBase.loadPrefixes(client)
    memberCount(client)
    welcome(client)
    messageCount(client)
    polls(client)
    levels(client)

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

        const { member, mentions } = message
        const content = message.content.replace('.status', '')


        if (member.hasPermission('ADMINISTRATOR')) {

            client.user.setPresence({

                activity: {
                    name: content,
                    type: 0,
                },
                status: 'idle'
            })

        } else {
            const statusNoEmbed = new Discord.MessageEmbed()

                .setAuthor('Leksa', 'https://wheedesign.com/img/design/13459094.png')
                .setColor()
                .setTitle('【ＮＯＰＥ】')
                .setThumbnail('https://media.giphy.com/media/g4UAqGuShn2P1TC3Nf/giphy.gif')
                .setDescription(`  **Ｓ𝐞яν𝒆𝐫**  :   ••¤ ${message.member.guild.name} ¤••`)
                .addField('🟥', 'Du hast keine Berechtigung dazu', true)
                .setTimestamp(message.createdTimestamp)
                .setFooter('mc.trikru.de', 'https://wheedesign.com/img/design/13459094.png');

            message.reply(statusNoEmbed).then(sentMessage => {
                sentMessage.delete({ timeout: 6500 })
            })
        }
    })

})

client.login(config.token)