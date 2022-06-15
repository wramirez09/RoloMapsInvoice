import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Maps from './components/Map/Maps';
import Form from './components/Form/Form';
import Marker from './components/Marker/Marker';

function App() {
  const center = { lat: 41.847749460328544, lng: -87.62357579744504 };
  const [ inputAddress, updateInputAddress ] = useState("1 north state st.");
  const [markerPosition, updateMarkerPosition] = useState({});
  const [fuzzyMarkers, updateFuzzyMarkers] = useState([<Marker options={center}></Marker>]);
  return (
    <div className="App">
      <Maps inputAddress={inputAddress} updateMarkerPosition={updateMarkerPosition} fuzzyMarkers={fuzzyMarkers}></Maps>
      <Form updateInputAddress={updateInputAddress} inputAddress={inputAddress}
        fuzzyMarkers={fuzzyMarkers} updateFuzzyMarkers={updateFuzzyMarkers} markerPosition={markerPosition} updateMarkerPosition={updateMarkerPosition}
      ></Form>
    </div>
  );
}

export default App;
