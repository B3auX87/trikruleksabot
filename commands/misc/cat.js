var pixabay = require("pixabay-api")
const Discord = require('discord.js')
var key = '19143808-fba6a26e8d83c33743d771be6'

module.exports = {
    commands: ['cats', 'kitty'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message) => {

        pixabay.searchImages(key, 'cats').then((r) => {
           
            message.reply(new Discord.MessageEmbed()
                .setTitle("Random Cats")
               
                .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))

        })
    }
}
    
