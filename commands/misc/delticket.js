const { Channel } = require("discord.js")

module.exports = {
    commands: ['clticket', 'closeticket'],
    minArgs: 0,
    permissions: 'ADMINISTRATOR',
    callback: async (message) => {
        
        let rusername = message.author.username.split('').slice(0)
        let username = ''

        for (i = 0; i < rusername.length; i++) {

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

                username += rusername[i].toLowerCase()
            }
        }

        if (!message.channel.name.includes('ticket') || message.channel.name === 'ticket') return

        await message.channel.send('Ticket wird geschlossen! ...')
        await message.channel.delete().catch(err => {
            if (err) return console.error('Fehler beim Löschen des Kanals: ' + err)
        })
    }
}