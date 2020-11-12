const mongoose = require('mongoose')
const { mongoPath } = require('./config.json')
//const mongoPath = 'mongodb+srv://Leksa:Zqe1Ee8UMMtXN80x@leksabot.wqdbs.mongodb.net/LeksaBot?retryWrites=true&w=majority'

module.exports = async () => {

  await mongoose.connect(mongoPath, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  
  return mongoose
}