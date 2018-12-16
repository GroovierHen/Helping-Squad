import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {connect} from 'react-redux';
import back from './icon.png';
import './Map.css';
import history from '../../history';

export class MapContainer extends Component {
  constructor(props){
    super();

    this.state={
      latitude:'',
      longitude:'',
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  }

  goBack(){
    window.history.back()
  }
  componentDidMount(){
    debugger;
    this.setState({latitude:this.props.userLocation.latitude,longitude:this.props.userLocation.longitude});
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    }

  render() {

      if(!this.props.login.signin){
        history.push('/login');
      }
      else if(this.props.login.signin && this.props.login.category === 'employee'){
        history.push('/employee');
      }
    const style = {
      width: '100%',
      height: '100%'
    }
    return (
        <div>
        <Map
            onClick={this.onMapClicked}
            google={this.props.google}
            style={style}
            center={{
              lat: this.state.latitude,
              lng: this.state.longitude
            }}
            zoom={15}
            onClick={this.onMapClicked}
          >
  
          <Marker
              title={'The marker`s title will appear as a tooltip.'}
              name={'SOMA'}
              position={{lat: this.state.latitude, lng: this.state.longitude}} />
          {
            this.props.markers.employees.map((employee,index)=>{
              
                return <Marker onClick={this.onMarkerClick.bind(this)} key={index}
                title={'The marker`s title will appear as a tooltip.'}
                name={employee.firstname+' '+employee.lastname}
                phone={employee.phone}
                position={{lat: employee.latitude, lng: employee.longitude}}
                icon={{
                  url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                }} />
            })
          }
          <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
              <h5>{this.state.selectedPlace.phone}</h5>
            </div>
        </InfoWindow>
        </Map>
        <img onClick = {this.goBack.bind(this)} className = 'icon' src = {back} />
        </div>
    );
  }
}
 
function recieveData(store) {
  return {
    userLocation:store.UserLocationReducer,
    markers:store.markersReducer,
    login:store.LoginReducer
  };
}

const newMapContainer = connect(recieveData)(MapContainer);

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAr8u5f_h_zO2hkcWEDfVhOU6civid1A7g")
})(newMapContainer)
