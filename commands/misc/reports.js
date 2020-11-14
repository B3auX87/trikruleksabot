const discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
    commands: 'report',
    minArgs: 2,
    maxArgs: 2,
    expectedArgs: '<Member> <Grund>',
    permissions: 'ADMINISTRATOR',
    callback: (message, client, args) => {

        let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let reason = args.slice(1).join(' ');
        let reports = message.guild.channels.find('name', config.reportsChannel);

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