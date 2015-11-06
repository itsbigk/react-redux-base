import mongoose from 'mongoose'

export default function(callback) {
  mongoose.connect('mongodb://localhost/testConnection')

  mongoose.connection.on('open', function(ref) {
    console.log('Connected to mongo server.')
    callback()
  })

  mongoose.connection.on('error', function(err) {
    console.log('Could not connect to mongo server!')
    console.log(err)
  })
}
