import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

import arrow from "../../images/arrow.png"

export const Country = () => {
  const [country, setCountry] = useState({});

  const navigate = useNavigate();

  let { name } = useParams();
  name = name.slice(1);
  console.log(name.trim());

  useEffect(() => {
    const endPoint = `https://restcountries.com/v3.1/name/${name}?fullText=true`;
    axios.get(endPoint).then((res) => setCountry(res.data[0]));
  }, []);

  console.log(country);

  const searchNativeName = () => {
    if (Object.keys(country).length > 0) {
      let { nativeName } = country.name;
      let [language] = Object.keys(nativeName);
      let { common, official } = nativeName[`${language}`];
      return common;
    }
  };

  const searchCurrencies = () => {
    if (Object.keys(country).length > 0) {
      let currency = country.currencies;
      let [currencyName] = Object.keys(currency);
      let { name, symbol } = currency[`${currencyName}`];
      return name;
    }
  };

  const searchLanguages = () => {
    if (Object.keys(country).length > 0) {
      let languagesArray = Object.values(country.languages);
      return languagesArray.map((language) => <li>{language}</li>);
    }
  };

  return (
    <div className="mx-auto my-0 w-11/12">
      <div className="p-3 pl-0 md:py-5 md:pl-10 ">
        <div 
          className=" w-36 py-2 px-4 flex items-center justify-around bg-white shadow-xl cursor-pointer hover:bg-blue-200 dark:bg-slate-700 dark:text-gray-300 dark:hover:bg-slate-800"
          onClick={()=> navigate('/')}
        >
          <img src={arrow} alt="arrow back" className="w-10" /> 
          <span className="">
            Back
          </span>
        </div>
      </div>
      {Object.keys(country).length > 0 && (
        <div className="  gap-2 dark:border-white md:flex">
          <div className=" dark:border-white md:w-2/4 md:p-20">
            <img
              src={country.flags.png}
              alt={`flag of ${country.name}`}
              className="w-full md:h-full text-white"
            />
          </div>
          <div className="flex flex-col gap-4 justify-items-center dark:text-gray-300 md:w-2/4 md:py-20">
            <h3 className=" pt-7 md:pt-0 font-semibold text-xl dark:text-gray-300 md:text-2xl">
              {country.name.common}
            </h3>
            <div className="flex flex-col gap-4 justify-items-center md:flex-row">
              <ul>
                <li>
                  <span className=" font-medium text-base dark:text-gray-300">
                    Native name:
                  </span>{" "}
                  {searchNativeName()}
                </li>
                <li>
                  <span className=" font-medium text-base dark:text-gray-300">
                    Population:
                  </span>{" "}
                  {country.population}
                </li>
                <li>
                  <span className=" font-medium text-base dark:text-gray-300">
                    Region:
                  </span>{" "}
                  {country.region}
                </li>
                <li>
                  <span className=" font-medium text-base dark:text-gray-300">
                    Sub region:
                  </span>{" "}
                  {country.subregion}
                </li>
                <li>
                  <span className=" font-medium text-base dark:text-gray-300">
                    Capital:
                  </span>{" "}
                  {country.capital}
                </li>
              </ul>
              <ul>
                <li>
                  <span className=" font-medium text-base dark:text-gray-300">
                    Top level domain:
                  </span>{" "}
                  {country.tld}
                </li>
                <li>
                  <span className=" font-medium text-base">Currencies:</span>{" "}
                  {searchCurrencies()}
                </li>
                <li className="flex gap-1">
                  <span className=" font-medium text-base dark:text-gray-300">
                    Languages:
                  </span>
                  <ul className="flex gap-1">{searchLanguages()}</ul>
                </li>
              </ul>
            </div>
            <div>
              <span className=" font-medium text-base dark:text-gray-300">
                Border countries:{" "}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};