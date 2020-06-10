import React, { Component, useRef } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInSignUpPage from '../src/pages/sign-in-and-sign-up/sign-in-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;


  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
           
          })
        });
        
      }
      this.setState({currentUser: userAuth})
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  
  render() {
    return <div className='App'>
      <Header currentUser={this.state.currentUser} /> 
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/signup" component={SignInSignUpPage} />
    </Switch>
    </div>
  }
}

export default App;
