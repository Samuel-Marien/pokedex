import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Provider } from './components/context'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/Home'
import Sets from './pages/Sets'
import Cards from './pages/Cards'
import Details from './pages/Details'
import SetDetails from './pages/SetDetails'
import Advanced from './pages/Advanced'
import AdvancedDetails from './pages/AdvancedDetails'

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
          <Route path="/details" exact>
            <Details />
          </Route>
          <Route path="/set-details" exact>
            <SetDetails />
          </Route>
          <Route path="/advanced" exact>
            <Advanced />
          </Route>
          <Route path="/advanced-details" exact>
            <AdvancedDetails />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
