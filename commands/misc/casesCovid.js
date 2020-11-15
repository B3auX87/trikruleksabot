const Discord = require('discord.js')
const axios = require('axios')
const countries = require("../../countries.json")
const url = 'https://api.covid19api.com/total/country/'

module.exports = {
    commands: ['cases', 'covid'],
    minArgs: 1,
    expectedArgs: '<Land>',
    callback: async (msg) => {

        const content = msg.content.split(/[ ,]+/)

        if (!countries[content[1]]) {

            msg.reply("Wrong country format")
        } else {

            const slug = content[1]
            const payload = await axios.get(`${url}${slug}`)
            const covidData = payload.data.pop();
            const caseEmbed = new Discord.MessageEmbed()

                .setAuthor('Leksa', 'https://wheedesign.com/img/design/13459094.png')
                .setColor('#5d24c8')
                .setTitle('ＣＯＶＩＤ_１９')
                .setThumbnail('https://media.giphy.com/media/KCvzHXd3nz2Oh3LkNn/giphy.gif')
                .setDescription(`  **Land**  :   ••¤ ${slug} ¤••`)
                .addFields(
                    {
                        name: '⚡️ Bestätigte:',
                        value: `🢒 ${covidData.Confirmed}`,
                    },
                    {
                        name: '💎 Gesundete:',
                        value: `🢒 ${covidData.Recovered}`,
                    },
                    {
                        name: '😷 Kranke:',
                        value: `🢒 ${covidData.Active}`,
                    },
                    {
                        name: '💀 Tote:',
                        value: `🢒 ${covidData.Deaths}`,
                    },
                )
                .setTimestamp(msg.createdTimestamp)
                .setFooter('mc.trikru.de', 'https://wheedesign.com/img/design/13459094.png');

            msg.reply(caseEmbed).then(sentMessage => {
                sentMessage.delete({ timeout: 20000 })
            })
        }

    }
}