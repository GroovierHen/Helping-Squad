import React, { Component } from 'react';
import Card from './card/card';
import doctor from './img/Doctor.jpg';
import elec from './img/Electrical.jpg';
import it from './img/ITMaster.jpg';
import moto from './img/motercycleMechanic.jpg';
import plumber from './img/plumber.jpg';
import './client.css';
import Drawer from './Drawer/Drawer';
import {connect} from 'react-redux';
import history from '../../history';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';




class Client extends Component{
    render(){

            if(!this.props.login.signin){
                history.push('/login');
            }
            else if(this.props.login.signin && this.props.login.category === 'employee'){
                history.push('/employee');
            }
        return(
            <div className="clientHeader">
                <Drawer name = {this.props.login.firstname + ' ' + this.props.login.lastname} email = {this.props.login.email}/>
                <center><h3>Use Our Services & Help Yourself</h3></center>
                <div className = 'client'>
                    <Card className= 'cards' src = {doctor} type="doctor" title = 'Doctor' content = 'In case of emergency, talk to a doctor from home,work or anywhere'/>
                    <Card className= 'cards' src = {elec} type="electritian" title = 'Electritian' content = 'Electricians install, maintain, repair, test and commission electrical and electronic equipment Get ourSelf'/>
                    <Card className= 'cards' src = {moto} type="mechanic" title = 'Mechanic' content = 'Is there any problem regarding  Motorbike or car, Contact a mechanic'/>
                    <Card className= 'cards' src = {it} type="itMaster" title = 'IT Master' content = 'The masters of IT are ready to help.'/>
                    <Card className= 'cards' src = {plumber} type="plumber" title = 'Plumber' content = 'Every Person Face many Problem when any thing distory at you Home ,Track plumber help on it self.'/>
                </div>
            </div>
        )
    }
}

function recieveData(store) {
    return {
      login:store.LoginReducer
    };
  }
  
const newClient = connect(recieveData)(Client);

export default newClient;


