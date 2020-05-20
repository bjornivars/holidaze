import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';



function EstablishmentMap({ google, name, latitude, longitude }) {
  /*   const containerStyle = {
      display: 'block',
      position: 'relative', 
      margin: 'auto', 
      width: '20em',
      height: '100px',
  
    } */
  return (
    <div className=" [ col-7 map ] ">
      <Map
        google={google}
        zoom={14}
        initialCenter={{
          lat: latitude,
          lng: longitude
        }}
      //style={containerStyle}
      >

        <Marker
          name={'Current location'} />

      </Map>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAnQ3VT1GsCOkeL2LrAu33LjpqrTgJyYfY",
})(EstablishmentMap)