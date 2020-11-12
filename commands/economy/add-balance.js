const economy = require('../../economy')

module.exports = {
  commands: ['addbalance', 'addbal'],
  minArgs: 2,
  maxArgs: 2,
  expectedArgs: "<The target's @> <coin amount>",
  permissionError: 'You must be an administrator to use this command.',
  permissions: 'ADMINISTRATOR',
  callback: async (message, arguments) => {
    const mention = message.mentions.users.first()

    if (!mention) {
      message.reply('Bitte Tag ein Member der die Coins bekommen soll.')
      return
    }

    const coins = arguments[1]
    if (isNaN(coins)) {
      message.reply('Bitte gebe eine verfügbare nummer für die coins an.')
      return
    }

    const guildId = message.guild.id
    const userId = mention.id

    const newCoins = await economy.addCoins(guildId, userId, coins)

    message.reply(
      `Du hast <@${userId}> ${coins} coin(s) gegeben. Dieser Member hat jetzt ${newCoins} coin(s)!`
    )
  },
}
