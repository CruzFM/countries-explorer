import { useState, useEffect } from "react";
import { Card } from "../Card/Card";
import { SearchAndFilter } from "../SearchAndFilter/SearchAndFilter"
import axios from 'axios';

export const DisplayCountries = () => {

 //--------------COUNTRIES STATE---------------

  const [countries, setCountries] = useState([]);

  //--------------------------------------------

  useEffect(() => {
    let endPoint = "https://restcountries.com/v3.1/all";
    axios.get(endPoint).then((res) => {
      setCountries(res.data);
    });
  }, []);

  const [filteredCountries, setFilteredCountries] = useState([]);


  //--------------------------------------------

  const [ loader, setLoader ] = useState(10);

  const handleLoadMoreCountries = ()=>{
    setLoader(prevLoader => prevLoader + 10);
  }

  const handleSubmitSearch = (e)=>{
    e.preventDefault();
    let value = e.target.search.value
    console.log(value)
  }

  return (
    <div className="mx-auto my-0 w-11/12">
      {/* <SearchAndFilter /> */}
      <div className="flex flex-col items-center md:flex-row md:justify-between p-4">
        <div>
          <form className="flex" onSubmit={(e)=> handleSubmitSearch(e)}>
            <button className="bg-green-300 p-2 rounded-l-md" type="submit">Search</button>
            <input type="input" name="search" className="border border-solid border-black rounded-r-md p-3" />
          </form>
        </div>
        <div>
          <form>
            <select className="p-3">
              <option>Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </form>
        </div>
      </div>

      <div className="grid place-items-center sm:grid-cols-2 md:grid-cols-4 gap-4">
        {countries.length > 0 &&
          countries
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
