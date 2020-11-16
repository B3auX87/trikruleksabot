const Discord = require("discord.js");
const weather = require("weather-js");

module.exports = {
    commands: ['weather', 'wetter'],
    expectedArgs: '<City>/<Postleitzahl>',
    minArgs: 1,
    callback: async (message, args) => {

        let city = args.join(" ");
        let degreetype = "C"; // You can change it to F. (fahrenheit.)

        await weather.find({ search: city, degreeType: degreetype }, function (err, result) {

            if (err || result === undefined || result.length === 0) return message.channel.send("Unbekannte Stadt ...");

            let current = result[0].current;
            let location = result[0].location;

            const embed = new Discord.MessageEmbed()
                .setAuthor(current.observationpoint)
                .setDescription(`》 ${current.skytext}`)
                .setThumbnail(current.imageUrl)
                .setColor(0x7289DA)
                .addFields(

                    {
                        name: '》 Breitengrad',
                        value: `⤷ ${location.lat}`,
                    },
                    {
                        name: '》 Längengrad',
                        value: `⤷ ${location.long}`,
                    },
                    {
                        name: '》 gefühlt wie',
                        value: `⤷ ${current.feelslike}°`,
                    },
                    {
                        name: '》 Einheit Typ',
                        value: `⤷ ${location.degreetype}`,
                    },
                    {
                        name: '》 Wind',
                        value: `⤷ ${current.winddisplay}`,
                    },
                    {
                        name: '》 Luftfeuchtigkeit',
                        value: `⤷ ${current.humidity} %`,
                    },
                    {
                        name: '》 Timezone',
                        value: `⤷ GMT ${location.timezone}`,
                    },
                    {
                        name: '》 Temperatur',
                        value: `⤷ ${current.temperature}°`,
                    },
                    {
                        name: '》 Beobachtungs Zeit',
                        value: `⤷ ${current.observationtime}`,
                    })

            message.channel.send(embed).then(sentMessage => {
                sentMessage.delete({ timeout: 50000 })
            })
        })
    }
}