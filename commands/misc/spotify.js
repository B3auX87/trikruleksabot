const Discord = require('discord.js')
const convert = require('parse-ms')

module.exports = {
    commands: 'spotify',
    expectedArgs: '<@Member>',
    maxArgs: 1,
    callback: async (message) => {

        let user;
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else {
            user = message.author;
        }

        let status;
        if (user.presence.activities.length === 1) status = user.presence.activities[0];
        else if (user.presence.activities.length > 1) status = user.presence.activities[1];

        if (user.presence.activities.length === 0 || status.name !== "Spotify" && status.type !== "LISTENING") {
            return message.channel.send("Dieser User hört kein Spotify.");
        }

        if (status !== null && status.type === "LISTENING" && status.name === "Spotify" && status.assets !== null) {
            let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
                url = `https:/open.spotify.com/track/${status.syncID}`,
                name = status.details,
                artist = status.state,
                album = status.assets.largeText,
                timeStart = status.timestamps.start,
                timeEnd = status.timestamps.end,
                timeConvert = convert(timeEnd - timeStart);

            let minutes = timeConvert.minutes < 10 ? `0${timeConvert.minutes}` : timeConvert.minutes;
            let seconds = timeConvert.seconds < 10 ? `0${timeConvert.seconds}` : timeConvert.seconds;
            let time = `${minutes}:${seconds}`;

            const embed = new Discord.MessageEmbed()
                .setAuthor("Spotify Track Information", "https://image.flaticon.com/icons/svg/2111/2111624.svg")
                .setColor(0x1ED768)
                .setThumbnail(image)
                .addFields(
                    {
                        name: '⤷ Name:',
                        value: name,                    
                    },
                    {
                        name: '⤷ Album:',
                        value: album,
                    },
                    {
                        name: '⤷ Artist:',
                        value: artist,
                    },
                    {
                        name: '⤷ Duration:',
                        value: time,
                    },
                    {
                        name: '⤷ Listen now on Spotify!',
                        value: `${artist} - ${name}`,
                    })
                .setURL(`⤷ Listen now on Spotify! ${url}`)
                    
            message.channel.send(embed)
        }
    }
}