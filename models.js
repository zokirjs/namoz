const moongose = require('mongoose')
moongose.connect('mongodb+srv://zokir:Asqaraka212@cluster0.qjy31.mongodb.net/telegram_bot', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Conected to MongoDB...')
    })
    .catch((err) => {
        console.log('The are some error to connecting Database:', err)
    })

const users = new moongose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    id: Number,
    is_sended: Boolean
})


module.exports = {
    users
}