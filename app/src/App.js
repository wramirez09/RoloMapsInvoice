import React, {createContext, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Maps from './components/Map/Maps';
import Form from './components/Form/Form';


function App() {

  const [ inputAddress, updateInputAddress ] = useState("1 north state st.");
  return (
    <div className="App">
      <Maps inputAddress={inputAddress}></Maps>
      <Form updateInputAddress={updateInputAddress} inputAddress={inputAddress}></Form>
    </div>
  );
}

export default App;
