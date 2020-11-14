const { Channel } = require("discord.js")

module.exports = {
    commands: ['cticket', 'createticket'],
    minArgs: 0,
    callback: async (message) => {
        let rusername = message.author.username.split('').slice(0)
        let username = ''

        for (i = 0; i < rawusername.length; i++) {

            if (rusername[i].toLowerCase() == "a"

            || rusername[i].toLowerCase() == "b"

            || rusername[i].toLowerCase() == "c"

            || rusername[i].toLowerCase() == "d"

            || rusername[i].toLowerCase() == "e"

            || rusername[i].toLowerCase() == "f"

            || rusername[i].toLowerCase() == "g"

            || rusername[i].toLowerCase() == "h"

            || rusername[i].toLowerCase() == "i"

            || rusername[i].toLowerCase() == "j"

            || rusername[i].toLowerCase() == "k"

            || rusername[i].toLowerCase() == "l"

            || rusername[i].toLowerCase() == "m"

            || rusername[i].toLowerCase() == "n"

            || rusername[i].toLowerCase() == "o"

            || rusername[i].toLowerCase() == "p"

            || rusername[i].toLowerCase() == "q"

            || rusername[i].toLowerCase() == "r"

            || rusername[i].toLowerCase() == "s"

            || rusername[i].toLowerCase() == "t"

            || rusername[i].toLowerCase() == "u"

            || rusername[i].toLowerCase() == "v"

            || rusername[i].toLowerCase() == "w"

            || rusername[i].toLowerCase() == "x"

            || rusername[i].toLowerCase() == "y"

            || rusername[i].toLowerCase() == "z"

            || rusername[i].toLowerCase() == "0"

            || rusername[i].toLowerCase() == "1"

            || rusername[i].toLowerCase() == "2"

            || rusername[i].toLowerCase() == "3"

            || rusername[i].toLowerCase() == "4"

            || rusername[i].toLowerCase() == "5"

            || rusername[i].toLowerCase() == "6"

            || rusername[i].toLowerCase() == "7"

            || rusername[i].toLowerCase() == "8"

            || rusername[i].toLowerCase() == "9") {

                username += rawusername[i].toLowerCase()
            }
        }

        if (message.channel.name !== 'create-a-ticket') return 
        message.reply('Du kannst in diesem Channel kein Ticket erstellen, Bitte erstelle ein Ticket in #create-a-ticket').then(msg => msg.delete({timeout: '5000'}))
        message.delete()

        let category = message.guild.channels.cache.find(ct => ct.name === 'Tickets & Vorschläge' && ct.type === 'category')

        if (!category) await message.guild.channels.create('Tickets & Vorschläge', {type: 'category'}).then(cat => category = cat)
        if (message.guild.channels.cache.find(cha => cha.name === `ticket-${username.toLowerCase()}`)) return message.reply('Du hast bereits ein Ticket erstellt!').then(msg => msg.delete({timeout: '5000'}))

        let supRole = message.guild.roles.cache.find(rl => rl.name === 'Admin' || rl.name === 'Moderator' || rl.name === 'Helfer')

        if (!supRole) return message.reply('Ich konnte leider keine Supporter Rolle finden, es wird entweder eine Rolle mit den Namen **Admin**, **Moderator** oder **Helfer** benötigt.').then(msg => msg.delete({timeout: '5000'}))

        await message.guild.channels.create(`ticket-${message.author.username}`, {type: 'text'}).then(ch => {

            ch.setParent(category)
            ch.overwritePermissions([
                {
                    id: message.guild.id,
                    allow: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'ATTACH_FILES']
                },
                {
                    id: message.author.id,
                    allow: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'ATTACH_FILES']
                }
            ])

            ch.send(`Hey <@&${supRole.id}, Hier braucht jemand Hilfe!`)
        
        }).catch(err => {
            if(err) return message.channel.send('Error: ' + err)
        })

        message.reply('Dein Ticket Channel wurde erstellt. Bitte gehe in diesen Kanal und beschreibe dein Problem!').then(msg => msg.delete({timeout: '5000'}))

    }
}