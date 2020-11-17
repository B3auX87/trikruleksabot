const Discord = require('discord.js')
const config = require('../../config.json')

module.exports = {
    commands: ['help', 'hilfe'],
    maxArgs: 0, 
    callback: (message) => {

        const { prefix } = config

        const helpEmbed = new Discord.MessageEmbed()

            .setAuthor('Leksa', 'https://wheedesign.com/img/design/13459094.png')
            .setColor('#a9f2e5')
            .setTitle('【H】【E】【L】【P】')
            .setThumbnail('https://media.giphy.com/media/AXOdttXiL8MeI/giphy.gif')
            .setDescription(`  **Ｓ𝐞яν𝒆𝐫**  :   ** ${message.member.guild.name} **
            ˜”*°••°*”˜˜”*°••°*”˜˜”*°••°*”˜`)
            .addFields(
                {
                    name: `✻ **${prefix}ahelp**`,
                    value: '》 Admin Befehle',
                },
                {
                    name: `✻ **${prefix}info**`,
                    value: '》 Zeigt Server Infos an',
                },
                {
                    name: `✻ **${prefix}ping**`,
                    value: '》 Zeigt deinen und den Bots Ping an',
                },
                {
                    name: `✻ **${prefix}add <num1> <num2>**`,
                    value: '》 rechnet 2 zahlen zusammen',
                },
                {
                    name: `✻ **${prefix}cticket/createticket**`,
                    value: '》 eröffne ein Ticket',
                },
                {
                    name: `✻ **${prefix}meme/memes**`,
                    value: '》 Zeigt Random Memes an',
                },
                {
                    name: `✻ **${prefix}wetter/weather <Stadt/Postleitzahl>**`,
                    value: '》 Wetter infos',
                },
                {
                    name: `✻ **${prefix}ascii <Text>**`,
                    value: '》 Style dein text',
                },
                {
                    name: `✻ **${prefix}spotify [<@name>]**`,
                    value: '》 Spotify Informationen',
                },
                {
                    name: `✻ **${prefix}suggestion <Text>**`,
                    value: '》 mache einen Vorschlag im Suggestion Channel',
                },
                {
                    name: `✻ **${prefix}cases/covid <Land>**`,
                    value: '》 covid Status Verfügbare Länder: germany, poland, united-kingdom, italy, united-states, denmark, russia, france, austria (österreich), luxembourg, switzerland, czech-republic, netherlands, belgium',
                },
                {
                    name: `✻ **${prefix}cats/kitty**`,
                    value: '》 Süße und witzige Katzen Bilder',
                },
                {
                    name: `✻ **${prefix}dogs/puppy**`,
                    value: '》 Süße und witzige Hunde Bilder',
                },
            )
            .setTimestamp(message.createdTimestamp)
            .setFooter('mc.trikru.de', 'https://wheedesign.com/img/design/13459094.png');

        message.reply(helpEmbed).then(sentMessage => {
            sentMessage.delete({ timeout: 50000 })
        })

    },
    requiredRoles: ['Member'],
}