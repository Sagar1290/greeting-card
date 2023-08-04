import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Detail from './cardApi';
import Card from './Card';


function App() {
  return (
    <div className="App">
      {Detail.map((currElem) =>
        // console.log(currElem.name)
        <Card Detail={currElem} />
      )}
    </div >
  );
}

export default App;
