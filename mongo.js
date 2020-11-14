const mongoose = require('mongoose')
//const { mongoPath } = require('./config.json')
const mongoPath = 'mongodb+srv://Leksa:dGcDNCDLNK9T6PKZ@leksabot.wqdbs.mongodb.net/Leksa?retryWrites=true&w=majority'

module.exports = async () => {

  await mongoose.connect(mongoPath, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  
  return mongoose
}