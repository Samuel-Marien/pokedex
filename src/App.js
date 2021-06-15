import React from 'react'

import { Provider } from './components/context'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'

import Home from './pages/Home'
import Sets from './pages/Sets'
import Cards from './pages/Cards'

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/set" exact>
            <Sets />
          </Route>
          <Route path="/cards" exact>
            <Cards />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
