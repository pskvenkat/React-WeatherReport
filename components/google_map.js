import React, { Component } from 'react';

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
  
  const style = {
    width: '200px',
    height: '200px'
  }
  
const MyMapComponent = withScriptjs(withGoogleMap(props => 

    <GoogleMap
     style = {style}
      defaultZoom={8}
      defaultCenter={{ lat: props.lat, lng: props.lon }}
    >
    
    </GoogleMap>
  ));


export default MyMapComponent;