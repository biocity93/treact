import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 43.661650,
      lng: -79.400560
    },
    zoom: 19

  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDw18R1soeqFV4vVTn-WhrS5psWKM1OBn4" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals={true}
      >
        <AnyReactComponent
          lat={43.661650}
          lng={-79.400560}
          text="Room 500L"
        />
      </GoogleMapReact>
    </div>
  );
}