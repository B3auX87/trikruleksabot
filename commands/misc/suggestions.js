const { MessageEmbed } = require("discord.js")


module.exports = {
  commands: ['suggestion' , 'ss'],
  expectedArgs: '<text>',
  minArgs: 1,
  requiredRoles: ['Member'],
  callback: (message, args) => {

    const cID = '776774107361574922' //suggestions channel ID
    const { member, channel, content } = message

    if (channel.id === cID) {

      let embed = new MessageEmbed()
      .setAuthor("SUGGESTION: " + message.author.tag, message.author.avatarURL())
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