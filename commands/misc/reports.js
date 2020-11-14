const discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
    commands: 'report',
    expectedArgs: '<text>',
    minArgs: 1,
    requiredRoles: ['Member'],
    callback: (message, args) => {
  
      const cID = '771112732241559603' //report channel ID
      const { channel } = message
  
      if (channel.id === cID) {
  
        let embed = new MessageEmbed()
        .setAuthor("Vorschlag von: " + message.author.tag, message.author.avatarURL())
        .setThumbnail(message.author.avatarURL())
        .setColor("#ff2050")
        .setDescription(args.join(" "))
        .setTimestamp()
        
        message.reply(embed)
        
      } else {
  
        return message.reply("Du musst in den Channel - reports")
      }  
      
    }
    
}