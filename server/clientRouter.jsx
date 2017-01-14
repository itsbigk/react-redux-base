import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { routes, configureStore } from '../shared'
import { RouterContext, match } from 'react-router'
import manifest from '../dist/ui/manifest.json'
import qs from 'qs'

const clientRouter = (req, res) => {
  const params = qs.parse(req.query),
        counter = parseInt(params.counter, 10) || 0,
        initialState = { counter },
        store = configureStore(initialState),
        bundle = manifest['bundle.js'],
        style = manifest['bundle.css'],
        vendor = manifest['vendor.js'];

  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    const initialComponent = renderToString(
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>
    ),
    finalState = store.getState();

    if(redirectLocation)
      res.redirect(301, redirectLocation.pathname + redirectLocation.search)
    else if(error)
      res.send(500, error.message)
    else if(renderProps == null)
      res.send(404, 'Not Found')
    else
      res.end(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Node/React</title>
            <link rel="stylesheet" href=${style} />
          </head>
          <body>
            <div id="app">${initialComponent}</div>
              <script src=${vendor} charset="utf-8"></script>
            <script>
              window.__INITIAL_STATE__ = ${JSON.stringify(finalState)}
            </script>
            <script src=${bundle} charset="utf-8"></script>
          </body>
        </html>
      `)
  })
}

export default clientRouter
