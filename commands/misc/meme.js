const rndmPuppy = require('random-puppy')

module.exports = {
    commands: ['meme', 'memes'],
    maxArgs: 0,
    callback: async (message) => {

        let reddit = [
            "meme",
            "animemes",
            "MemesOfAnime",
            "animememes",
            "AnimeFunny",
            "dankmemes",
            "dankmeme",
            "wholesomememes",
            "MemeEconomy",
            "techsupportanimals",
            "meirl",
            "me_irl",
            "2meirl4meirl",
            "AdviceAnimals"
        ]


        let subreddit = reddit[Math.floor(Math.random() * reddit.length)]

        message.channel.startTyping()

        rndmPuppy(subreddit).then(async url => {

            await message.channel.send({

                files: [{

                    attachment: url,
                    name: 'meme.png'
                }]

            }).then(() => message.channel.stopTyping())
            
        }).catch(err => console.error(err))

    }
}