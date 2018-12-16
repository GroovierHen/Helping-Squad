import React, { Component } from 'react';
import loginAction from '../../actions/loginAction/loginAction';
import './login.css';
import "materialize-css/dist/css/materialize.min.css";
import store from '../../store/store';
import history from '../../history';
import {connect} from 'react-redux';
class Login extends Component{
	constructor(){
		super()
		this.state ={
			email:'',
			password:''
		}
	}
	componentDidMount(){
		navigator.geolocation.getCurrentPosition((position) =>{
			this.setState({
			 latitude  :position.coords.latitude,
			 longitude  :position.coords.longitude
	  
			})
		  });
	}
	handleChange(evt){
		this.setState({[evt.target.type]:evt.target.value});
	}
	connectUser(evt){

		if(this.state.email && this.state.password){
		evt.preventDefault();
		store.dispatch(loginAction(this.state));
		}
	}
    render(){
				if(this.props.login.signup && this.props.login.category !== 'employee'){
					history.push('/client');
				}
				else if(this.props.login.signup && this.props.login.category === 'employee'){
					history.push('/employee');
				}
        return(
            <div>
                <div className="container containerLogin white z-depth-2">
				<div id="login" className="col s12">
					<div className="col s12">
						<form className="form-container">
							<h3 className="teal-text">Hello</h3>
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
							<br/>
							<center>
								<button onClick={this.connectUser.bind(this)} className="btn waves-effect waves-light teal" name="action">Connect</button>
								<br/>
								<br/>
							</center>
						</form>
					</div>
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
  
const newLogin = connect(recieveData)(Login);

export default newLogin;