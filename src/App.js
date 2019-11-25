import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Particles from 'react-particles-js';
import particles from './particles';
import Fiction from './pages/Fiction';
import Poetry from './pages/Poetry';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Particles style={{position: 'absolute', backgroundColor: '#b485ff'}} params={particles} />
      <div className="container">
        <Navigation />
        <div className="content" style={{position:'relative'}}>
          <Switch>
            <Route path="/home" exact={true}>
              <Home />
            </Route>
            <Route path="/fiction" exact={true}>
              <Fiction />
            </Route>
            <Route path="/poetry" exact={true}>
              <Poetry />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
