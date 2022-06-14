import React, { useState, useEffect, ref } from 'react'

import getReverseGeocodingData from '../utilities/getReverseGeocodingData';
export default function Marker({options, map, address, setAddress}) {
  const [marker, setMarker] = useState();

  useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
      
      
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
        
      marker.setOptions({
        position:{...options},
        draggable:true,
        
    },[]);
    
    marker.setMap(map)
    
    // set initial label on marker 
    getReverseGeocodingData(marker.position.lat(), marker.position.lng()).then((resp)=>{
        let pulledAddress = (resp.results[0].formatted_address);
        marker.setLabel(pulledAddress);
        setAddress(pulledAddress);
      });

      // set label after every drag and drop
    window.google.maps.event.addListener(marker, 'dragend', function() { 
        getReverseGeocodingData(marker.position.lat(), marker.position.lng()).then((resp)=>{
            let pulledAddress = (resp.results[0].formatted_address);
            marker.setLabel(pulledAddress);
            setAddress(pulledAddress);

        })
      });

    window.google.maps.event.addListener(marker, 'click', function(e) { 
        console.log("marker clicked", e)
        
    });
    }
  }, [marker, options]);

  return (
    null
  )
}
