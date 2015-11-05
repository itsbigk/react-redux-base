import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import morgan from 'morgan'
// import routes from './routes/routes'
import api from './routes/api'
import db from './db'

const app  = express()
const port = process.env.PORT || 3000

app.server = http.createServer(app)

app.use(express.static('./public'))
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(methodOverride())

db(() => {
  // app.use(routes())

  app.use('/api', api())

  app.server.listen(port)

  console.log('Server running on http://localhost:%s', port);
})

export default app

// require('./routes/routes.js')(app);

// app.listen(port);
