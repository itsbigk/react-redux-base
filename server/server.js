import Express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import configureStore from '../src/store/configureStore'
import path from 'path'
import qs from 'qs'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config.dev'
import { RouterContext, match } from 'react-router'
import createLocation from 'history/lib/createLocation'
import routes from '../src/config/routes'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import morgan from 'morgan'
import api from './api'
import db from './db'

const app = new Express(),
      port = process.env.PORT || 3000,
      compiler = webpack(webpackConfig);

let bundleDir

if(process.env.NODE_ENV === 'production') {

  app.use(Express.static('./dist/ui'))
  bundleDir = 'bundle.min.js'

} else if(process.env.NODE_ENV === 'development') {

  bundleDir = `${webpackConfig.output.publicPath}/bundle.js`
}

app.use(Express.static('./node_modules'))
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(methodOverride())

db(() => {

  app.use('/api', api())

  if(process.env.NODE_ENV === 'development') {
    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
    app.use(webpackHotMiddleware(compiler))
  }

  app.use((req, res) => {
    const params = qs.parse(req.query),
          counter = parseInt(params.counter, 10) || 0,
          initialState = { counter },
          store = configureStore(initialState);

    let location = createLocation(req.path)

    match({routes, location}, (error, redirectLocation, renderProps) => {
      const initialComponent = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      ),
      finalState = store.getState(),
      HTML = `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Node/React</title>
          <link rel="stylesheet" href="bundle.css" />
        </head>
        <body>
          <div id="app">${initialComponent}</div>
          <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(finalState)}
          </script>
          <script src="${bundleDir}"></script>
        </body>
      </html>
      `;

      if(redirectLocation)
        res.redirect(301, redirectLocation.pathname + redirectLocation.search)
      else if(error)
        res.send(500, error.message)
      else if(renderProps == null)
        res.send(404, 'Not Found')
      else
        res.end(HTML)
    })
  })

  app.listen(port, error => {
    if (error) {
      console.error(error)
    } else {
      console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
    }
  })
})

export default app
