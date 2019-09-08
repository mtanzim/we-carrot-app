import React, { useState, useEffect, Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import CONSTANTS from "../../constants";

const mapStyles = {
  width: 900,
  height: 600
};

export class MapContainer extends Component {
  constructor(props) {
    console.log(props);
    super(props);
  }


  displayMarkers = () => {
    return this.props.businesses.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude
          }}
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };
  render() {
    return (
      <Map
        style={mapStyles}
        initialCenter={{
          lat: this.props.businesses[0].latitude,
          lng: this.props.businesses[0].longitude
        }}
        google={this.props.google}
        zoom={14}
      >
        {this.displayMarkers()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCI2r1FCVmUEMlMeMzjuu6ia1O-v83tRDc"
})(MapContainer);
