import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/temp.css';

// Route Components
import Default from './components/Default.jsx';
import Index from './components/Index.jsx';
import Navbar from './components/Navbar.jsx';


export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
            <Switch>
              <Route exact path="/" component={Index}/>
              <Route component={Default} />
            </Switch>
          {/* This is where out Footer can go as a component once created */}
        </Router>
      </>
    )
  }
}
