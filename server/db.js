import mongoose from 'mongoose'

const db = callback => {
  mongoose.connect('mongodb://localhost/testConnection')

  mongoose.connection.on('open', ref => {
    console.log('Connected to mongo server.')
    callback()
  })

  mongoose.connection.on('error', err => {
    console.log(`Could not connect to mongo server! Error: ${err}`)
  })
}

export default db
