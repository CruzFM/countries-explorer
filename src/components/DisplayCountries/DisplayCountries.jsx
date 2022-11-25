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

  const [moreCountries, setMoreCountries] = useState([]);


  //--------------------------------------------

  const [ loader, setLoader ] = useState(10);

  const handleLoadMoreCountries = ()=>{
    setLoader(prevLoader => prevLoader + 10);
  }

  console.log(moreCountries);

  return (
    <div className="mx-auto my-0 w-11/12">
      <SearchAndFilter />

      <div className="grid place-items-center md:grid-cols-4 gap-4">
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
          // style={{ width: "100%", backgroundColor: "blue", color: "white" }}
          className=" w-full bg-slate-400 text-black hover:bg-slate-700 hover:text-white dark:bg-sky-700 dark:text-white dark:hover:bg-sky-900 cursor-pointer my-2 p-2"
          onClick={handleLoadMoreCountries}
        >
          Load More
        </button>
      </div>
    </div>
  );
};
