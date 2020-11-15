const Discord = require('discord.js')

module.exports = {
    commands: 'clear',
    maxArgs: 1,
    expectedArgs: '<Amount>',
    permissions: 'ADMINISTRATOR',
    callback: async (message, args, client) => {

        message.channel.messages.fetch().then(fetched => {

            if (message.deletable) {
                message.delete();
            }

            let deleteAmount;

            if (parseInt(args[0]) > 100) {
                deleteAmount = 100;
            } else {
                deleteAmount = parseInt(args[0]);
            }

            message.channel.bulkDelete(deleteAmount, true)
                
            const clearEmbed = new Discord.MessageEmbed()

                .setAuthor('Leksa', 'https://wheedesign.com/img/design/13459094.png')
                .setColor('#55beb3')
                .setTitle('【C】【L】【E】【A】【R】')
                .setThumbnail('https://media.giphy.com/media/dUULQduJMNCH7ZI9RV/giphy.gif')
                .setDescription(`  **Ｓ𝐞яν𝒆𝐫**  :   ••¤ ${message.member.guild.name} ¤••`)
                .addFields(
                    {
                        name: 'ᑕᒪEᗩᖇ ᑕᕼᗩᑎᑎEᒪ :',
                        value: `》 ${message.channel.name}`,
                    },
                    {
                        name: 'ᑕᒪEᗩᖇ :',
                        value: '✅',
                    },
                )
                .setTimestamp(message.createdTimestamp)
                .setFooter('mc.trikru.de', 'https://wheedesign.com/img/design/13459094.png');

            message.reply(clearEmbed).then(sentMessage => {
                sentMessage.delete({ timeout: 6500 })

            })

        }).catch(console.error);
    },
}
