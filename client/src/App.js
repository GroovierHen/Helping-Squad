import React, { Component } from 'react';
import './App.css';
import {Router,Route} from 'react-router-dom';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Home from './components/home/main';
import Client from './components/clientDashboard/client';
import Map from './components/Map/Map';
import Profile from './components/empDashboard/employee';
import store from './store/store';
import history from './history';

import persistor from './store/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props){
    super();
    console.log(props)

  }


  state={
    
  }
  render() {
    console.log(this.props)
    if(this.props.data.signin){
      if(history.location.pathname == '/'){
        history.push('/client')
      }
    }
    // navigator.geolocation.getCurrentPosition((position) =>{
    //   this.setState({
    //    latitude  :position.coords.latitude,
    //    longitude  :position.coords.longitude

    //   })
    // });
    return (
          <PersistGate loading={null} persistor={persistor}>
            <Router history={history}>
              <div>
              <Route path="/client" component={Client}/>
              <Route path="/map" component={Map}/>
              {/* <Route path="/user_profile" component={Profile}/> */}
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/signup" component={Signup}/>
              <Route exact path="/employee" component={Profile}/>
              </div>
          </Router>
          </PersistGate>

    );
  }
}

function appData(store){
  return{
    data : store.LoginReducer
  }
}

const connectedApp = connect(appData)(App)


export default connectedApp;
