const Discord = require('discord.js')
var pixabay = require("pixabay-api")
var key = '19143808-fba6a26e8d83c33743d771be6'

module.exports = {
    commands: ['dogs', 'puppy'],
    minArgs: 0,
    maxArgs: 0,
    callback: async (message) => {

        pixabay.searchImages(key, 'puppy').then((r) => {
         
            message.reply(new Discord.MessageEmbed()
                .setTitle("Random Puppy")
               
                .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))

        })
    }
}