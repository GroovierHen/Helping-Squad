import React, { Component } from "react";
import history from '../../history'
import "materialize-css/dist/css/materialize.min.css";
import {connect} from 'react-redux'
import store from '../../store/store'
class Employee extends Component {
  state = {};


  logout(){
    debugger;
    fetch('/logout_user',{
      
    }).then(function(res){
      return res.json()
    }).then(function(resp){
      if(resp){
        history.push('/')
      }
    })
  }


  render() {
    if(!this.props.login.signin){
      history.push('/login');
    }
    console.log(this.props)
    const styles = {
      data: {
        marginTop: "40px",
        width: "450px"
      },
      tr: {
        padding: "35px 5px",
        fontSize: "1.5rem"
      }
    };
    return (
      <div style={styles.data} className='container'>
        <div className='card'>
          <div className='card-content'>
            <h3 class='teal-text'>Welcome</h3>
            <table className='striped centered'>
              <tbody>
                <tr>
                  <th style={styles.tr}>Name:</th>
                  <td style={styles.tr}>{this.props.login.firstname + ' ' + this.props.login.lastname}</td>
                </tr>
                <tr>
                  <th style={styles.tr}>Email:</th>
                  <td style={styles.tr}>{this.props.login.email}</td>
                </tr>
                <tr>
                  <th style={styles.tr}>Contact:</th>
                  <td style={styles.tr}>{this.props.login.phone}</td>
                </tr>
                <tr>
                  <th style={styles.tr}>Category:</th>
                  <td style={styles.tr}>{this.props.login.profession}</td>
                </tr>
              </tbody>
            </table>
            <div class='card-action' style={{ padding: "16px 0" }}>
              <a class='waves-effect waves-light btn red' onClick = {this.logout.bind(this)}>Log Out</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


function recieveData(store) {
  return {
    login:store.LoginReducer
  };
}

const newEmp = connect(recieveData)(Employee);


export default newEmp;
