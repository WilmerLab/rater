import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { HashRouter, BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './components/App'
import { ROUTER } from './config'

let Router = ROUTER === 'hash' ? HashRouter : BrowserRouter

render(
  <Router>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Router>,
  document.getElementById(`app`),
)
