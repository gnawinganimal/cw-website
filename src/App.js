import React from 'react';
import './App.scss';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Particles from 'react-particles-js';
import particles from './particles';
import Fiction from './pages/Fiction';
import Poetry from './pages/Poetry';

const App = () => (
  <HashRouter>
    <div className="App">
      <Particles style={{position: 'absolute', backgroundColor: '#b485ff'}} params={particles} />
      <div className="container">
        <Navigation />
        <div className="content" style={{position:'relative'}}>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/fiction">
              <Fiction />
            </Route>
            <Route path="/poetry">
              <Poetry />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  </HashRouter>
);

export default App;
