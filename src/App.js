import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";


import { SearchAndFilter } from "./components/SearchAndFilter/SearchAndFilter"
import { Card } from "../src/components/Card/Card"
import { DisplayCountries } from './components/DisplayCountries/DisplayCountries';
import { Home } from './components/Home/Home';
import { Country } from './components/Country/Country';


function App() {
  // AXIOS ESTÁ INSTALADO FER, NO TE OLVIDES

  //--------------COUNTRIES STATE---------------

  // const [countries, setCountries] = useState([]);


  // useEffect(() => {
  //   let endPoint = "https://restcountries.com/v3.1/all";
  //   axios.get(endPoint).then((res) => {
  //     setCountries(res.data);
  //   });
  // }, []);

  //---------------DARK MODE-----------------

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode((prevDarkMode) => !prevDarkMode);

    // console.log(isDarkMode)
  };

  // const storeDarkMode = ()=>{
  //   isDarkMode ? localStorage.setItem("theme", "dark") : localStorage.setItem("theme", "light");
  // }

  // useEffect( ()=>{
  //   storeDarkMode()
  //   let darkModeStored = localStorage.getItem("theme");
  //   if(darkModeStored === "dark" ){
  //     setIsDarkMode(true)
  //   } else{
  //     setIsDarkMode(false)
  //   }
  // },[isDarkMode])

  //----------------------------------------

  return (
    <div
      className={
        isDarkMode === true ? "dark bg-slate-900 min-h-screen" : "min-h-screen bg-gray-100"
      }
    >
      <Navbar
        handleToggleDarkMode={handleToggleDarkMode}
        isDarkMode={isDarkMode}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries:name" element={<Country />}/>
      </Routes>
    </div>
  );
}

export default App;
