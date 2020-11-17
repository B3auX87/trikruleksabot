const Discord = require('discord.js')
var pixabay = require("pixabay-api")
var key = '19143808-fba6a26e8d83c33743d771be6'

module.exports = {
    commands: ['dogs', 'puppy'],
    minArgs: 0,
    maxArgs: 0,
    callback: async (message) => {

        pixabay.searchImages(key, 'puppy').then((r) => {
            //create embed
            message.reply(new Discord.MessageEmbed()
                .setTitle("Random Puppy")
                //get random puppy image from response
                .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))

        })
    }
}