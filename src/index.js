import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import Search from './containers/Search'
import Repos from './containers/Repos'

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} />
        </Switch>
    </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker()
