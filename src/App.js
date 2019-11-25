import React from 'react';
import './App.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Particles from 'react-particles-js';
import { Card } from 'react-bootstrap';
import particles from './particles';
import Fiction from './pages/Fiction';

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
          </Switch>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
