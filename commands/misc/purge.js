const Discord = require('discord.js')

module.exports = {
    commands: ['cc', 'purge'],
    maxArgs: 0,
    callback: (message, args, text, client) => {

        message.channel.messages.fetch().then(fetched => {

            const notPinned = fetched.filter(fetchedMsg => !fetchedMsg.pinned)
            
            message.channel.bulkDelete(notPinned, true);

            const ccEmbed = new Discord.MessageEmbed()

                .setAuthor('Leksa', 'https://wheedesign.com/img/design/13459094.png')
                .setColor('#ff3f76')
                .setTitle('【P】【U】【R】【G】【E】')
                .setThumbnail('https://media.giphy.com/media/Nbfanu3HvTMru/giphy.gif')
                .setDescription(`  **Ｓ𝐞яν𝒆𝐫**  :   ••¤ ${message.member.guild.name} ¤••`)
                .addField('ρυяgє 𝙲𝙷𝙰𝙽𝙽𝙴𝙻:', `${message.channel.name}`, true)
                .addField('ρυяgє:', `🆗`, true)
                .setTimestamp(message.createdTimestamp)
                .setFooter('mc.trikru.de', 'https://wheedesign.com/img/design/13459094.png');

            message.reply(ccEmbed).then(sentMessage => {
                sentMessage.delete({ timeout: 6500 })
            })

        }).catch(console.error);

    },
    permissions: ['ADMINISTRATOR'],
}