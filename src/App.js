import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'

import Home from './pages/Home'
import Set from './pages/Sets'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/set">
          <Set />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
