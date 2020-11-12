module.exports = {
    
    commands: 'invites', 
    minArgs: 0, 
    maxArgs: 0, 
    callback: (message) => {
        const { guild } = message

        guild.fetchInvites().then((invites) => {
            const inviteCounter = {}

            invites.forEach((invite) => {
                const { uses, inviter } = invite
                const { username, discriminator } = inviter
                const name = `${username}#${discriminator}`

                inviteCounter[name] = (inviteCounter[name] || 0) + uses
            })

            let replyText ='Ｓ𝐞яν𝒆𝐫 Einladungen: '

            const sortedInvites = Object.keys(inviteCounter).sort((a, b) => inviteCounter[b] - inviteCounter[a])

            console.log(sortedInvites)

            for (const invite of sortedInvites) {
                const count = inviteCounter[invite]

                replyText += (` ${invite} hat ${count} eingeladen | | `)
            }
            
            message.channel.send(replyText).then(sentMessage => {
                sentMessage.delete({ timeout: 15000 })
            })
        })
    },
    permissions: ['ADMINISTRATOR'],
}