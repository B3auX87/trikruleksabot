const mongo = require('../../mongo')
const warnSchema = require('../../schemas/warn-schema')
const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
  commands: 'warn',
  minArgs: 2,
  expectedArgs: "<@Name> <Grund>",
  permissions: 'ADMINISTRATOR',
  callback: async (message, arguments) => {

    const target = message.mentions.users.first()
    if (!target) {
      message.reply('Please specify someone to warn.')
      return
    }

    arguments.shift()

    const guildId = message.guild.id
    const userId = target.id
    const targetMember = message.guild.members.cache.get(target.id)
    const { member } = message
    const tag = `<@${member.id}>`
    const reason = arguments.join(' ')

    const warning = {
      author: message.member.user.tag,
      timestamp: new Date().getTime(),
      reason,
    }

    const warnEmbed = new Discord.MessageEmbed()

      .setAuthor('Leksa', 'https://wheedesign.com/img/design/13459094.png')
      .setColor()
      .setTitle('【W】【A】【R】【N】')
      .setThumbnail('https://media.giphy.com/media/IeizWjAsLMsFO/giphy.gif')
      .setDescription(`  **Ｓ𝐞яν𝒆𝐫**  :   ••¤ ${message.guild.name} ¤••`)
      .addField('🟢 ᑕOᗰᗰᗩᑎᗪ User:', `${tag}`, true)
      .addField('🔴 𝚆𝙰𝚁𝙽 Member:', `${targetMember}`, true)
      .addField('ᖇEᗩᔕOᑎ:', `${reason}`, true)
      .setTimestamp(message.createdTimestamp)
      .setFooter('mc.trikru.de', 'https://wheedesign.com/img/design/13459094.png');

    message.reply(warnEmbed).then(sentMessage => {
      sentMessage.delete({ timeout: 15000 })
    })

    await mongo().then(async (mongoose) => {
      try {
        mongoose.set('useFindAndModify', false)
        await warnSchema.findOneAndUpdate(
          {
            guildId,
            userId,
          },
          {
            guildId,
            userId,
            $push: {
              warnings: warning,
            },
          },
          {
            upsert: true,
          }
        )
      } catch {
        console.error();
      }
    })
  },
}