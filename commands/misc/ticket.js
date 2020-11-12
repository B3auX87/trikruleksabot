const channelId = '776349347658727435' // Ticket Channel ID
const check = '✅'
let registered = false

const registerEvent = (client) => {
  if (registered) {
    return
  }

  registered = true

  console.log('REGISTERING EVENTS')

  client.on('messageReactionAdd', (reaction, user) => {
    if (user.bot) {
      return
    }

    console.log('HANDLING REACTION')
    const { message } = reaction
    if (message.channel.id === channelId) {
      message.delete()
    }
  })
}

module.exports = {
  commands: ['ticket', 'support'],
  minArgs: 1,
  expectedArgs: '<message>',
  callback: (userMessage, arguments, text, client) => {
    const { guild, member } = userMessage

    registerEvent(client)

    const channel = guild.channels.cache.get(channelId)
    channel
      .send(
        `Ein neues Ticket wurde von <@${member.id}> erstellt!
    
"${text}"

Klick ${check} icon wenn dieses Problem gelöst ist.`
      )
      .then((ticketMessage) => {
        ticketMessage.react(check)

        userMessage.reply(
          'Dein Ticket wurde gesendet! Du kannst in den nächsten 24 Std mit einer Antwort rechnen.'
        )
      })
  },
}
