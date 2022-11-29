import './App.css';
import {useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";

import { Home } from './components/Home/Home';
import { Country } from './components/Country/Country';
import { Footer } from "./components/Footer/Footer"


function App() {
  //---------------DARK MODE-----------------

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode((prevDarkMode) => !prevDarkMode);
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
        isDarkMode === true
          ? "dark bg-slate-900 min-h-screen"
          : "min-h-screen bg-gray-100"
      }
    >
      <Navbar
        handleToggleDarkMode={handleToggleDarkMode}
        isDarkMode={isDarkMode}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries:name" element={<Country />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
