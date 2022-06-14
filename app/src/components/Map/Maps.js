import React, {useEffect, useState} from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from './Map';
import Marker from '../Marker/Marker';
import Button from '@mui/material/Button';

import getReverseGeocodingData from '../utilities/getReverseGeocodingData';
export default function Maps({inputAddress}) {
    const render = (status) => {
        return <h1>{status}</h1>;
      };
    const center = { lat: 41.847749460328544, lng: -87.62357579744504 };
    const melrose = { lat: 41.89552373298903, lng: -87.85181128738502 };
    const zoom = 14;
    
    const [markerPosition, updateMarkerPosition] = useState({});
   
    useEffect(()=>{
      
      if(window.google){
        let geocoder = new window.google.maps.Geocoder();
        let addressString = `${inputAddress.address} ${inputAddress.city} ${inputAddress.state} ${inputAddress.zip}`
      geocoder.geocode({"address":addressString}, (result)=>{
          console.log(inputAddress)
          updateMarkerPosition({ lat: result[0].geometry.location.lat(), lng: result[0].geometry.location.lng() })
        })
      }
      
      
    },[inputAddress])

    const [fuzzyMarkers, updateFuzzyMarkers] = useState([<Marker options={center}></Marker>]);

  return (
    <Wrapper apiKey={"AIzaSyD34CFQMrtosagAigNXo7U6_pZEkPmoPy0"} render={render}>
  <p>maps test</p>
  <Map zoom={zoom} center={center}>
    {fuzzyMarkers.map((marker)=>{
      return marker
    })}
  </Map>
  <Button variant="contained" onClick={()=>{updateFuzzyMarkers([...fuzzyMarkers, <Marker options={markerPosition}></Marker>])}}>Add Marker</Button>
</Wrapper>
  )
}
