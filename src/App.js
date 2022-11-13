import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { Navbar } from "./components/Navbar/Navbar"
import { SearchAndFilter } from "./components/SearchAndFilter/SearchAndFilter"
import { Card } from "../src/components/Card/Card"


function App() {
  // AXIOS ESTÁ INSTALADO FER, NO TE OLVIDES

  //--------------COUNTRIES STATE---------------

  const [countries, setCountries] = useState([]);

  //--------------------------------------------

  useEffect(() => {
    let endPoint = "https://restcountries.com/v3.1/all";
    axios.get(endPoint).then((res) => {
      setCountries(res.data);
      console.log(countries);
    });
  }, []);

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
        isDarkMode === true ? "dark bg-black min-h-screen" : "min-h-screen"
      }
    >
      <Navbar
        handleToggleDarkMode={handleToggleDarkMode}
        isDarkMode={isDarkMode}
      />
      <SearchAndFilter />
      <h1 className="dark:text-white p-6">
        Hola Fer, tenés axios instalado, ponete las pilas gil.
      </h1>
      <div>
        {countries.length > 0 &&
          countries.map((country) => (
            <Card
              name={country.name.common}
              capital={country.capital}
              region={country.region}
              population={country.population}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
