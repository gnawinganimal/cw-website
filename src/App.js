import React from 'react';
import './App.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Particles from 'react-particles-js';
import { Card } from 'react-bootstrap';
import particles from './particles';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Particles width="100%" height="100%" style={{position: 'absolute', backgroundColor: '#b485ff'}} params={particles} />
      <div className="container">
        <Navigation />
        <div className="content" style={{position:'relative'}}>
          <Switch>
            <Route path="/home" exact={true}>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
