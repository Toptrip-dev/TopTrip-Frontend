// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import React, { Component } from 'react';
// import './plan.css';
 
// class SimpleMap extends Component {
//   render() {
//     return (
//         // <Map google={this.props.google} zoom={14} >
 
//         //     <Marker onClick={this.onMarkerClick}
//         //         name={'Current location'} />
 
//         //     <InfoWindow onClose={this.onInfoWindowClose}>
//         //     </InfoWindow>
//         // </Map>

        
//     );
//   }
// }

 
// export default GoogleApiWrapper({
//   apiKey: ('AIzaSyDA0d4e-jZWyNgpN-vJXeYEIhOspv5SIoQ')
// })(SimpleMap)

import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (

    <div style={{ height: '75vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDA0d4e-jZWyNgpN-vJXeYEIhOspv5SIoQ" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}