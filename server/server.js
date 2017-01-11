import express from 'express'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import api from './api'
import db from './db'
import clientRouter from './clientRouter'

const app = new express(),
      port = process.env.PORT || 3001;

if(process.env.NODE_ENV !== 'production') {
  app.use(require('morgan')('combined'))
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(methodOverride())

db(() => {

  app.use('/api', api())

  if(process.env.NODE_ENV === 'production') {
    app.use(express.static('./dist/ui'))
    app.use(clientRouter)
  }

  app.listen(port, error => {
    if (error) {
      console.error(error)
    } else {
      console.info(`==> 🌎  Listening on port ${port}.`)
    }
  })
})

export default app
