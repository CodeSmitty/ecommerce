import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

class App extends Component {
  render() {
    return <div className='App'> 
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
    </div>;
  }
}

export default App;
