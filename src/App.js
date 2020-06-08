import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInSignUpPage from '../src/pages/sign-in-and-sign-up/sign-in-sign-up.component'
const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

class App extends Component {

  
  render() {
    return <div className='App'>
      <Header /> 
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/signup" component={SignInSignUpPage} />
    </Switch>
    </div>
  }
}

export default App;
