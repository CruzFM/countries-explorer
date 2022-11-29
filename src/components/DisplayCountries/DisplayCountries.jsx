import { useState, useEffect } from "react";
import { Card } from "../Card/Card";
import axios from "axios";
import searchIcon from "../../images/search-icon.png";

export const DisplayCountries = () => {

  //--------------COUNTRIES STATE---------------
  const [countries, setCountries] = useState([]);

  //-------------FILTERED COUNTRY STATE-----------
  const [filteredCountries, setFilteredCountries] = useState([]);

  //-----------------API CALL---------------------------

  useEffect(() => {
    let endPoint = "https://restcountries.com/v3.1/all";
    axios.get(endPoint).then((res) => {
      setCountries(res.data);
    });
  }, []);



  //-------------------Loader Button-----------------------

  const [loader, setLoader] = useState(10);

  const handleLoadMoreCountries = () => {
    setLoader((prevLoader) => prevLoader + 10);
  };


  //---------Search Countries by Name---------------
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    let value = e.target.search.value;
    const searchRegex = new RegExp(value, "gi");
    let searched = countries.filter((country) =>
      country.name.common.match(searchRegex)
    );
    setFilteredCountries(searched);
    setLoader(10);
  };

  //---------Filter by Region---------------
  const handleChangeFilter = (e) => {
    let value = e.target.value;
    let filteredByRegion = countries.filter(
      (country) => country.region === value
    );
    setFilteredCountries(filteredByRegion);
    setLoader(10);
  };

  return (
    <div className="mx-auto my-0 w-11/12">
      {/*-------------- SEARCH AND FILTER------------------  */}
      <div className="flex flex-col items-start md:flex-row md:justify-between p-4 md:items-center">
        <div className="pb-4 md:pb-0">
          <form className="flex" onSubmit={(e) => handleSubmitSearch(e)}>
            <button
              className="bg-white p-2 rounded-l-md dark:bg-slate-700"
              type="submit"
            >
              <img src={searchIcon} alt="search" className=" w-10" />
            </button>
            <input
              type="input"
              name="search"
              className="rounded-r-md p-3 dark:bg-slate-700 dark:text-gray-300"
              placeholder="Search for a country"
            />
          </form>
        </div>
        <div>
          <form>
            <select
              className="py-3 px-5 rounded-md dark:bg-slate-700 dark:text-gray-300"
              onChange={handleChangeFilter}
            >
              <option>Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </form>
        </div>
      </div>

      {/*-------------- DISPLAY COUNTRIES ------------------  */}
      <div className="grid place-items-center sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredCountries.length === 0
          ? countries
              .slice(0, loader)
              .map((country) => (
                <Card
                  name={country.name.common}
                  capital={country.capital}
                  region={country.region}
                  population={country.population}
                  flag={country.flags.png}
                  key={country.name.common}
                />
              ))
          : filteredCountries
              .slice(0, loader)
              .map((country) => (
                <Card
                  name={country.name.common}
                  capital={country.capital}
                  region={country.region}
                  population={country.population}
                  flag={country.flags.png}
                  key={country.name.common}
                />
              ))}
      </div>
      <div>
        <button
          className=" w-full bg-slate-400 text-black hover:bg-slate-700 hover:text-white dark:bg-sky-700 dark:text-white dark:hover:bg-sky-900 cursor-pointer my-2 p-2"
          onClick={handleLoadMoreCountries}
        >
          Load More
        </button>
      </div>
    </div>
  );
};
