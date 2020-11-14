module.exports = {
    commands: 'ascii',
    expectedArgs: '<text>',
    minArgs: 1,
    requiredRoles: ['Member'],
    callback: (message, args) => {
        ascii.font(args.join(" "), 'Doom', function(err, result) {

            if (err) {

                return message.channel.send('Error: ' + err)
            }

            message.channel.send(result, {
                code: 'md'
            })
        
        })

    }

}