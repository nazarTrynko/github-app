import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Switch, Route } from 'react-router-dom'

import './index.css'

import store, { history } from './store'
import registerServiceWorker from './registerServiceWorker'
import AppViewContainer from './containers/App/'

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={AppViewContainer} />
      </Switch>
    </ConnectedRouter>
  </Provider>

), document.getElementById('root'))
registerServiceWorker()
