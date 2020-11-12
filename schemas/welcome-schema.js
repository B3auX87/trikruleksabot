const mongoose = require('mongoose')

const reqString = {type:String, required: true}

const welcomeShema = mongoose.Schema({_id: reqString, channelID: reqString, text: reqString})

module.exports = mongoose.model('welcome-channels', welcomeShema)