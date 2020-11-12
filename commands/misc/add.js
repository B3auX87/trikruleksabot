module.exports = {
    commands: ['add', 'addition'], 
    expectedArgs: '<num1> <num2>', 
    minArgs: 2, 
    maxArgs: 2, 
    callback: (message, arguments) => {
        const num1 = +arguments[0]
        const num2 = +arguments[1]

        const addEmbed = new Discord.MessageEmbed()

            .setAuthor('Leksa', 'https://wheedesign.com/img/design/13459094.png')
            .setColor()
            .setTitle('【Ａｄｄｉｔｉｏｎ】')
            .setThumbnail('https://media.giphy.com/media/IvV2SJ6ukwsAEI9lBa/giphy.gif')
            .setDescription('Dein Ping und der Ping vom Bot')
            .addField('ᖇEᔕᑌᒪT 🌐 :', `${num1 + num2}`, true)
            .setTimestamp(message.createdTimestamp)
            .setFooter('mc.trikru.de', 'https://wheedesign.com/img/design/13459094.png');

        message.reply(addEmbed).then(sentMessage => {
            sentMessage.delete({ timeout: 8000 })
        })
    },
}