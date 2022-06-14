import React, { useEffect, useRef, useState } from 'react'

export default function Map({center, zoom, children}) {
const ref = useRef(null);
const [ map, setMap ] = useState();

const style = {"overflow":"hidden", "position":"static", width:"100%", height:"700px"}
const [address, setAddress] = useState(null);

const addressStyles={
  textAlign:"left",
  margin:"20px"
}


useEffect(()=>{

  if(address){
     
  }
  
    if (ref.current && !map) {
        setMap(new window.google.maps.Map(ref.current, {center, zoom}));
      }   
      
      
},[ref, map]);


let markers = ()=>{
  return (
    <div ref={ref} id="map" style={{...style}}>
       {React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        // set the map prop on the child component
        return React.cloneElement(child, { map, setAddress, address });
      }
    })}
    
    </div>
  )
}


let renderAddress = ()=>{
  return <div style={{...addressStyles}}>
  <h2>Bill To:</h2>
  <p>{address}</p>
  </div>
}



  return <>
  {markers()}
  {renderAddress()}
  </>
  
}
