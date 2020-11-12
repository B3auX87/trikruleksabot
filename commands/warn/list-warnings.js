const mongo = require('../../mongo')
const warnSchema = require('../../schemas/warn-schema')

module.exports = {
  commands: ['listwarnings', 'lw'],
  minArgs: 1,
  expectedArgs: "<@Name>",
  permissions: 'ADMINISTRATOR',
  callback: async (message, arguments, text) => {
    const target = message.mentions.users.first()
    if (!target) {
      message.reply('Bitte gib den Member (<@Name>) an, von dem du die Warnungen laden möchtest.')
      return
    }

    const guildId = message.guild.id
    const userId = target.id

    await mongo().then(async (mongoose) => {
      try {
        
        const results = await warnSchema.findOne({
          guildId,
          userId,
        })

        let reply = `Frühere Warnungen von <@${userId}>:\n\n`

        for (const warning of results.warnings) {
          const { author, timestamp, reason } = warning

          reply += `von ${author} am ${new Date(
            timestamp
          ).toLocaleDateString()} für "${reason}"\n\n`
        }

        message.reply(reply)
      } finally {
        mongoose.connection.close()
      }
    })
  },
}
