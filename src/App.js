import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {

  // AXIOS ESTÁ INSTALADO FER, NO TE OLVIDES

  useEffect(() =>{
    let endPoint = 'https://restcountries.com/v3.1/all'
    axios.get(endPoint)
      .then(res=> console.log(res.data))
  }, [])

  return (
    <div>
      <h1>
        Hola Fer, tenés axios instalado, ponete las pilas gil.
      </h1>
    </div>
  );
}

export default App;
