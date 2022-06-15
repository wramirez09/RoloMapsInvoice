import React, {Fragment, useEffect} from 'react'
import { Wrapper } from "@googlemaps/react-wrapper";
import Map from './Map';
import Marker from '../Marker/Marker';
import Button from '@mui/material/Button';

// import getReverseGeocodingData from '../utilities/getReverseGeocodingData';
export default function Maps({inputAddress, updateMarkerPosition,fuzzyMarkers, updateFuzzyMarkers}) {
    const render = (status) => {
        return <h1>{status}</h1>;
      };
    const center = { lat: 41.847749460328544, lng: -87.62357579744504 };
    const zoom = 14;
   
    useEffect(()=>{
      if(window.google){
        let geocoder = new window.google.maps.Geocoder();
        let addressString = `${inputAddress.address} ${inputAddress.city} ${inputAddress.state} ${inputAddress.zip}`
      geocoder.geocode({"address":addressString}, (result)=>{
          updateMarkerPosition({ lat: result[0].geometry.location.lat(), lng: result[0].geometry.location.lng() })
        })
      }
      
      
    },[inputAddress, updateMarkerPosition])

  return (
    <Wrapper apiKey={process.env.REACT_APP_API_KEY} render={render}>
  <p>maps test</p>
  <Map zoom={zoom} center={center}>
    {fuzzyMarkers.map((marker, index)=>{
      return marker
    })}
  </Map>
  
</Wrapper>
  )
}
