import { useState, useEffect } from "react";
import { Card } from "../Card/Card";
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

  console.log(moreCountries);

  return (
    <div>
      {/* {countries.length > 0 &&
        countries.map((country) => (
          <Card
            name={country.name.common}
            capital={country.capital}
            region={country.region}
            population={country.population}
          />
        ))} */}

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
  );
};
