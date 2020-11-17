const rp = require('random-puppy')

var subreddits = [
    'Rabbits',
    'cutebunnies'
]

var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))]

module.exports = {
    commands: ['dogs', 'puppy'],
    maxArgs: 0,
    callback: (message) => {

        try {

            rp(sub).then(url => {

                message.channel.send(url);

            })

        } catch (e) {

            console.log(e)
        }
    }
}