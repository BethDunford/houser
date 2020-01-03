import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import routes from "./routes";
import Header from './Components/Header/Header';

class App extends Component {
  render () {
    return(
      <Router>
      <div className = "App">
        <header>
          <Header />
        </header>
        {routes}
      </div>
      </Router>
    )
  }
}

export default App;
