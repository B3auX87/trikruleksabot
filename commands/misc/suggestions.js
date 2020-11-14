const { MessageEmbed } = require("discord.js")


module.exports = {
  commands: ['suggestion' , 'ss'],
  expectedArgs: '<text>',
  minArgs: 1,
  requiredRoles: ['Member'],
  callback: (message, args) => {

    const cID = '771112732241559603' //suggestions channel ID
    const { channel } = message

    if (channel.id === cID) {

      let embed = new MessageEmbed()
      .setAuthor("Vorschlag von: " + message.author.tag, message.author.avatarURL())
      .setThumbnail(message.author.avatarURL())
      .setColor("#ff2050")
      .setDescription(args.join(" "))
      .setTimestamp()
      
      message.reply(embed).then(m => {
        m.react("✅")
        m.react("❌")
      })
      
    } else {

      return message.reply("Du musst in den Channel - suggestions")
    }  
    
  }
}