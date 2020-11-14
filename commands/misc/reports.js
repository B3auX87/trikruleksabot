const discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
    commands: 'report',
    minArgs: 3,
    maxArgs: 3,
    expectedArgs: '<Member> <Grund>',
    permissions: 'ADMINISTRATOR',
    callback: (message, client, args) => {

        let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let reason = args.slice(1).join(' ');
        let reports = message.guild.channels.find('name', config.reportsChannel);

        if (!target) return message.reply('Bitte gebe den Member an den du Reporten möchtest!');
        if (!reason) return message.reply('Bitte gebe einen Grund für diesen Report an!');
        if (!reports) return message.reply(`Bitte erstelle einen channel mit dem Namen ${config.reportsChannel} um die Reports schicken und einsehen zu können!`);

        let embed = new discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(target.user.avatarURL)
            .addField('Reported Member', `${target.user.username} with an ID: ${target.user.id}`)
            .addField('Reported von', `${message.author.username} with an ID: ${message.author.id}`)
            .addField('Reported Time', message.createdAt)
            .addField('Reported In', message.channel)
            .addField('Reported Grund', reason)
            .setFooter('Reported user imformation', target.user.displayAvatarURL);

        message.channel.send(`${target} wurde von ${message.author} wegen ${reason} reportet`).then(msg => msg.delete(2000));
        reports.send(embed);
    }
}