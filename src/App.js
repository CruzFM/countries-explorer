import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { Navbar } from "./components/Navbar/Navbar"

function App() {

  // AXIOS ESTÁ INSTALADO FER, NO TE OLVIDES

  useEffect(() =>{
    let endPoint = 'https://restcountries.com/v3.1/all'
    axios.get(endPoint)
      .then(res=> console.log(res.data))
  }, [])

  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleToggleDarkMode = ()=>{
    setIsDarkMode(prevDarkMode => !prevDarkMode);
  }

  return (
    <div className={isDarkMode ? "dark bg-black" : ""}>
      <Navbar handleToggleDarkMode={handleToggleDarkMode} isDarkMode={isDarkMode} />
      <h1 className='bg-black text-white p-6'>
        Hola Fer, tenés axios instalado, ponete las pilas gil.
      </h1>
    </div>
  );
}

export default App;
