const mongoose = require('mongoose')

const URI = process.env.MongoDB_URI ? process.env.MongoDB_URI : 'mongodb://localhost/test'

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const connection = mongoose.connection

connection.once('open', () => {
    console.log('Conectado a la base de datos')
})