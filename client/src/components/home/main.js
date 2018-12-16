import React, { Component } from "react";

import ScrollableAnchor from "react-scrollable-anchor";
import { configureAnchors } from "react-scrollable-anchor";
import history from '../../history';
import "materialize-css/dist/css/materialize.min.css";
import "./main.css";

import about from "./assets/about-img.jpg";
import team1 from "./assets/team-1.jpg";
import team2 from "./assets/team-2.jpg";
import team3 from "./assets/team-3.jpg";
import team4 from "./assets/team-4.jpg";
// import team4 from "./assets/team-4.jpg";

import {connect} from 'react-redux';

class Main extends Component {
  state = {};

  componentWillMount = () => {
    configureAnchors({ offset: -60, scrollDuration: 1000 });
  };

  render() {
      if(this.props.login.signup && this.props.login.category !== 'employee'){
        history.push('/client');
      }
      else if(this.props.login.signup && this.props.login.category === 'employee'){
        history.push('/employee');
      }
    return (
      <div>
        <ScrollableAnchor id={"top"}>
          <div className='background'>
            <div className='headings'>
              <h2>Welcome to Helping Squad</h2>
              <h5>We Provide Emergency Services Needs Partner Like You</h5>
              <a onClick={()=>{history.push('/signup')}} className='waves-effect waves-light btn'>
                Sign up
              </a>
              <a onClick={()=>{history.push('/login')}} className='waves-effect waves-light btn'>
                Login
              </a>
            </div>
          </div>
        </ScrollableAnchor>

        <nav className='navv'>
          <div className='nav-wrapper container'>
            <a href='#top' className='brand-logo'>
              HSquad
            </a>
            <ul id='nav-mobile' className='right hide-on-small-only'>
              <li>
                <a href='#top'>Home</a>
              </li>
              <li>
                <a href='#about'>About Us</a>
              </li>
              <li>
                <a href='#services'>Services</a>
              </li>
              <li>
                <a href='#contact'>Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>

        <ScrollableAnchor id={"about"}>
          <section className='about'>
            <div className='container'>
              <h4 style={{ fontWeight: "700" }}>About Us</h4>
              <div className='divider' />
              <p>
                Emergency services is one of the best service that solve that
                problem a person is facing on daliy life .Our goal is to Solve
                Every problem,We are targeting
                ,MoterCycle,Doctor,Plumber,Electrical Service.
              </p>
              <div className='row'>
                <div className='col s12 m6'>
                  <img style={{ maxWidth: "100%" }} src={about} alt='about' />
                </div>
                <div className='col s12 m6 aboutc'>
                  <h4>We provide great services and your Needs</h4>
                  <p>
                    We are providing great Services and Needs .In daliy life A
                    lot of motorcycle puncture on the road.Man have no idea What
                    he should our app providing them services.
                  </p>
                  <p>
                    Road Accident A lot of person can death our app will
                    communicate to nearest Doctor,So humanity Spreading is also
                    involving in this app.{" "}
                  </p>
                  <p>
                    In Daily Base in our Home if our light off ,We conffuse so
                    Our app is finishing your problem you can communicate
                    nearest Electrical problem.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollableAnchor>

        <ScrollableAnchor id={"services"}>
          <section className='services'>
            <div className='container'>
              <h4 style={{ fontWeight: "700" }}>Our Services</h4>
              <div className='divider' />
              <p style={{ textAlign: "center" }}>
                We are providing great Services and Needs .In daliy life A lot
                of motorcycle puncture on the road.
              </p>
              <div className='row' style={{textAlign: 'left'}}>
                <div className='col s12 m4'>
                  <h5>
                    <i className='fa fa-user-md' />
                    Doctor
                  </h5>
                  <p>
                    Road Accident A lot of person can death our app will
                    communicate to nearest Doctor,So humanity Spreading is also
                    involving in this app.
                  </p>
                </div>
                <div className='col s12 m4'>
                  <h5>
                    <i className='fa fa-motorcycle' />
                    Motercycle Mechanic
                  </h5>
                  <p>
                    Motercycle Mechanic will Work Professtionaly any Where When
                    you Want.
                  </p>
                </div>
                <div className='col s12 m4'>
                  <h5>
                    <i className='fa fa-bolt' />
                    Electrical Mechanic
                  </h5>
                  <p>
                    Electricians install, maintain, repair, test and commission
                    electrical and electronic equipment Get ourSelf
                  </p>
                </div>
                </div>


                <div className='row'>
                 <div className='col s12 m4'>
                  <h5>
                    <i className='fa fa-desktop' />
                    IT Master
                  </h5>
                  <p>
                    iT Master solve all your problem witch you face using Any
                    type of Technalog in your Home ,accourding to your time.
                  </p>
                </div>
                <div className='col s12 m4'>
                  <h5>
                    <i className='fa fa-wrench' />
                    Plumber
                  </h5>
                  <p>
                    Every Person Face many Problem when any thing distory at you
                    Home ,Track plumber help on it self.
                  </p>
                </div>
                <div className='col s12 m4'>
                  <h5>
                    <i className='fa fa-history' />
                    Future Services
                  </h5>
                  <p>
                    in Future we Also can involve other services that can help
                    human
                  </p>
                </div>
                </div>
            </div>
          </section>
        </ScrollableAnchor>

        <section className='team'>
          <div className='container'>
            <h4 style={{ fontWeight: "700" }}>Our Team</h4>
            <div className='divider' />
            <p style={{ textAlign: "center" }}>
              Our Team is one of the best Team witch include Mern Stack and full
              Stack developer
            </p>
            <div className='row'>
              <div className='col s12 m3'>
                <div>
                  <img className='pic' src={team1} alt='Team 1' />
                </div>
                <h5>Hammad</h5>
                <span>Full Stack Developer</span>
                <i className='fab fa-twitter' />
                <i className='fab fa-facebook-f' />
                <i className='fab fa-google-plus-g' />
                <i className='fab fa-linkedin-in' />
              </div>
              <div className='col s12 m3'>
                <div>
                  <img className='pic' src={team2} alt='Team 2' />
                </div>
                <h5>Usama</h5>
                <span>Full Stack Developer</span>
                <i className='fab fa-twitter' />
                <i className='fab fa-facebook-f' />
                <i className='fab fa-google-plus-g' />
                <i className='fab fa-linkedin-in' />
              </div>
              <div className='col s12 m3'>
                <div>
                  <img className='pic' src={team3} alt='Team 3' />
                </div>
                <h5>Moeez</h5>
                <span>Full Stack Developer</span>
                <i className='fab fa-twitter' />
                <i className='fab fa-facebook-f' />
                <i className='fab fa-google-plus-g' />
                <i className='fab fa-linkedin-in' />
              </div>
              <div className='col s12 m3'>
                <div>
                  <img className='pic' src={team4} alt='Team 3' />
                </div>
                <h5>Talha</h5>
                <span>Full Stack Developer</span>
                <i className='fab fa-twitter' />
                <i className='fab fa-facebook-f' />
                <i className='fab fa-google-plus-g' />
                <i className='fab fa-linkedin-in' />
              </div>
            </div>
          </div>
        </section>

        <ScrollableAnchor id={"contact"}>
          <section className='contact'>
            <div className='container'>
              <h4 style={{ fontWeight: "700" }}>Contact Us</h4>
              <div className='divider' />
              <p style={{ textAlign: "center" }}>
                Any problem using our app contect with us.
              </p>
              <div className='row'>
                <div className='col s12 m6'>
                  <p className='info'>
                    <i className='fas fa-map-marker-alt' /> Emergency Service
                    Faislabad
                  </p>
                  <p className='info'>
                    <i className='fas fa-envelope' /> emergencyservice@gamil.com
                  </p>
                  <p className='info'>
                    <i className='fas fa-phone' /> +1 5589 55488 55s
                  </p>
                </div>
                <div className='col s12 m6'>
                  <div className='row' style={{ marginTop: "30px" }}>
                    <div className='input-field col s12'>
                      <input
                        type='text'
                        name='username'
                        id='username'
                        placeholder='Your Name'
                        className='browser-default'
                      />
                    </div>
                    <div className='input-field col s12'>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Your Email'
                        className='browser-default'
                      />
                    </div>
                    <div className='input-field col s12'>
                      <input
                        type='text'
                        name='subject'
                        id='subject'
                        placeholder='Subject'
                        className='browser-default'
                      />
                    </div>
                    <div className='input-field col s12'>
                      <textarea
                        name='message'
                        id='message'
                        placeholder='Message'
                      />
                    </div>
                    <a className='waves-effect waves-light btn'>Send Message</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollableAnchor>

        <footer className='footer'>
          <div className='container'>
            <p>
              &copy; Copyright <strong>Emergency Service.</strong> All Rights
              Reserved
            </p>
            Designed by Helping Squad
          </div>
        </footer>
      </div>
    );
  }
}

function recieveData(store) {
  return {
    login:store.LoginReducer
  };
}

const newMain = connect(recieveData)(Main);

export default newMain;
