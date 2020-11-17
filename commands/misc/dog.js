const Discord = require('discord.js')
const superagent = require("superagent")

module.exports = {
    commands: ['dogs', 'puppy'],
    minArgs: 0,
    maxArgs: 0,
    callback: async (message) => {

        let msg = await message.channel.send("Generating...")

        let { body } = await superagent
            .get(`https://dog.ceo/api/breeds/image/random`)

        if (!{ body }) return message.channel.send("I broke! Try again.")

        const dEmbed = new Discord.MessageEmbed()

            .setColor('#e0ffff')
            .setAuthor(`DOGS!`, message.guild.iconURL)
            .setImage(body.message)
            .setTimestamp()
            .setFooter(`Leksa`)

        message.channel.send({ dEmbed })

        msg.delete();
    }
}