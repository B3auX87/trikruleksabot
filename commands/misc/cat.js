const { get } = require("snekfetch"); 

module.exports = {
    commands: ['cats', 'kitty'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message) => {

        try {

            get('https://aws.random.cat/meow').then(res => {

                const embed = new Discord.MessageEmbed()
                    .setImage(res.body.file)
                return message.channel.send({ embed });
            })

        } catch (err) {

            return message.channel.send(err.stack);
        }
    }
}
    
