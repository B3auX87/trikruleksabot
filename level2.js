
const SQLite = require("better-sqlite3")
const sql = new SQLite('./scores.sqlite')

module.exports = (client) => {
    const table = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'scores';").get()

    if (!table['count(*)']) {

        sql.prepare("CREATE TABLE scores (id TEXT PRIMARY KEY, user TEXT, guild TEXT, points INTEGER, level INTEGER);").run()
        sql.prepare("CREATE UNIQUE INDEX idx_scores_id ON scores (id);").run()
        sql.pragma("synchronous = 1")
        sql.pragma("journal_mode = wal")
    }

    client.getScore = sql.prepare("SELECT * FROM scores WHERE user = ? AND guild = ?")
    client.setScore = sql.prepare("INSERT OR REPLACE INTO scores (id, user, guild, points, level) VALUES (@id, @user, @guild, @points, @level);")

    client.on('message', (message) => {

        if (message.author.bot) return

        let score

        if (message.guild) {

            score = client.getScore.get(message.author.id, message.guild.id)
            if (!score) {

                score = { id: `${message.guild.id}-${message.author.id}`, user: message.author.id, guild: message.guild.id, points: 0, level: 1 }
            }
            score.points++

            const curLevel = Math.floor(0.1 * Math.sqrt(score.points))

            if (score.level < curLevel) {
                score.level++

                message.reply(`Du bist jetzt Level **${curLevel}**! Very Nice!!`)
            }

            client.setScore.run(score)
        }
    })
}
