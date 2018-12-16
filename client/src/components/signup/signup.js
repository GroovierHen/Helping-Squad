import React, { Component } from 'react';
import signupAction from '../../actions/signupAction/signupAction';
import {InputLabel,FormControl,Select,MenuItem} from '@material-ui/core';
import './signup.css';
import "materialize-css/dist/css/materialize.min.css";
import store from '../../store/store';
import history from '../../history';
import {connect} from 'react-redux';
class Signup extends Component{
    constructor(){
        super();
        this.state ={
            profession:'',
            latitude:'',
            longitude:''
        }
    }
    handleChange(evt){
		this.setState({[evt.target.id]:evt.target.value});
    }
    selectHandleChange(evt){
        this.setState({profession:evt.target.value})
    }
    handleRadio(evt){
        this.setState({category:evt.target.id});
    }
    signupFun(evt){
        if(this.state.firstname && this.state.lastname && this.state.email && this.state.password && this.state.category && this.state.phone){
            evt.preventDefault();
            if(!this.state.profession && this.state.category === 'employee'){
                alert('Please Select Your Profession.');
            }
            else{
                store.dispatch(signupAction(this.state));
            }
            
        }
        
    }
    render(){
        if(this.props.login.signup && this.props.login.category !== 'employee'){
            history.push('/client');
        }
        else if(this.props.login.signup && this.props.login.category === 'employee'){
            history.push('/employee');
        }
        navigator.geolocation.getCurrentPosition((position) =>{
            this.setState({
             latitude:position.coords.latitude,
             longitude:position.coords.longitude
            })
          });

        return(
            <div>
                <div className="container containerSignup white z-depth-2">
                <div id="register" className="col s12">
                        <form className="col s12">
                            <div className="form-container">
                                <h3 className="teal-text">Welcome</h3>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input required onChange={this.handleChange.bind(this)} placeholder="First Name" id="firstname" type="text" className="validate"/>
                                    </div>
                                    <div className="input-field col s6">
                                        <input required onChange={this.handleChange.bind(this)} placeholder="Last Name" id="lastname" type="text" className="validate"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input required onChange={this.handleChange.bind(this)} placeholder="Email" id="email" type="email" className="validate"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input required onChange={this.handleChange.bind(this)} placeholder="Password" id="password" type="password" className="validate"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input required onChange={this.handleChange.bind(this)} placeholder="Phone" id="phone" type="text" className="validate"/>
                                    </div>
                                </div>
                                <div className="row">
                                <p>
                                    <label>
                                    <input required onChange={this.handleRadio.bind(this)} className="with-gap" name="group3" id="employee" type="radio" />
                                    <span>Employee</span>
                                    </label>

                                    <label>
                                    <input required onChange={this.handleRadio.bind(this)} className="with-gap" name="group3" id="client" type="radio" />
                                    <span className="second-radio">Client</span>
                                    </label>
                                </p>
                                </div>
                                {this.state.category === 'employee' && <div className="row">
                                <FormControl className="formControlSelect">
                                <InputLabel htmlFor="profession-simple">Select Your Profession</InputLabel>
                                <Select
                                    value={this.state.profession}
                                    onChange={this.selectHandleChange.bind(this)}
                                    required={true}
                                    inputProps={{
                                    name: 'profession',
                                    id: 'profession-simple',
                                    }}
                                >
                                    <MenuItem value={"doctor"}>Doctor</MenuItem>
                                    <MenuItem value={"mechanic"}>Mechanic</MenuItem>
                                    <MenuItem value={"electritian"}>Electritian</MenuItem>
                                    <MenuItem value={"itMaster"}>IT Master</MenuItem>
                                    <MenuItem value={"plumber"}>Plumber</MenuItem>
                                </Select>
                                </FormControl>
                                </div>}
                                <center>
                                    <button onClick={this.signupFun.bind(this)} className="btn waves-effect waves-light teal" type="submit" name="action">Submit</button>
                                </center>
                            </div>
                        </form>
                    </div>
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
  
const newSignup = connect(recieveData)(Signup);

export default newSignup;