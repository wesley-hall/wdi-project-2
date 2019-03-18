import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import { BrowserRouter as Browser, Route, Switch } from 'react-router-dom'

import Home from './components/home'
import EventsIndex from './components/eventsindex'
import EventsShow from './components/eventsshow'

import './style.scss'

const App = () => {
  return (
    <Browser>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/events/:code/:id" component={EventsShow} />
          <Route path="/events/:code" component={EventsIndex} />
        </Switch>
      </div>
    </Browser>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
