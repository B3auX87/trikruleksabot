const Discord = require('discord.js')
const { get } = require("snekfetch")

module.exports = {
    commands: ['dogs', 'puppy'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message) => {

        try {

            get('https://dog.ceo/api/breeds/image/random').then(res => {

                const embed = new Discord.MessageEmbed()
                    .setImage(res.body.file)
                return message.channel.send({ embed })
            })

        } catch (err) { 

            return message.channel.send(err.stack)
        }
    }
}