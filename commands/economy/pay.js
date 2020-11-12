const economy = require('../../economy')

module.exports = {
  commands: 'pay',
  minArgs: 2,
  maxArgs: 2,
  expectedArgs: "< @> <Amount>",
  callback: async (message, arguments, text) => {
    const { guild, member } = message

    const target = message.mentions.users.first()
    if (!target) {
      message.reply('Bitte gib an wem du die Coins geben möchtest.')
      return
    }

    const coinsToGive = arguments[1]
    if (isNaN(coinsToGive)) {
      message.reply('Bitte gebe eine verfügbare nummer für die coins an.')
      return
    }

    const coinsOwned = await economy.getCoins(guild.id, member.id)
    if (coinsOwned < coinsToGive) {
      message.reply(`Du hast keine ${coinsToGive} coins!`)
      return
    }

    const remainingCoins = await economy.addCoins(
      guild.id,
      member.id,
      coinsToGive * -1
    )
    const newBalance = await economy.addCoins(guild.id, target.id, coinsToGive)

    message.reply(
      `Du hast <@${target.id}> ${coinsToGive} coins gezahlt! Er hat nun ${newBalance} coins und du hast noch ${remainingCoins} coins!`
    )
  },
}
