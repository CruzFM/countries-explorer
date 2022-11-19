import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

export const Country = ()=>{

    const [ country, setCountry ] = useState({})

    let { name } = useParams();
    name = name.slice(1)
    console.log(name.trim())

    useEffect( ()=>{
        const endPoint = `https://restcountries.com/v3.1/name/${name}?fullText=true`;
        axios.get(endPoint)
            .then(res => setCountry(res.data[0]) )
    }, [])

    console.log(country)


    const searchNativeName = () =>{
        if( Object.keys(country).length > 0){
            let { nativeName } = country.name;
            let [language] = Object.keys(nativeName);
            let {common, official} = nativeName[`${language}`];
            return common;
        }
    }

    const searchCurrencies = ()=>{
        if (Object.keys(country).length > 0){
            let currency = country.currencies;
            let [currencyName] = Object.keys(currency)
            let {name, symbol} = currency[`${currencyName}`];
            return name;
        }
    }

    const searchLanguages = ()=>{
        if(Object.keys(country).length > 0){
            let languagesArray = Object.values(country.languages)
            return languagesArray.map(language => <li>{language}</li>)
        }
    }

    return(
        <div className="mx-auto my-0 w-11/12">
        <div>
            Back
        </div>
        { Object.keys(country).length > 0 &&
        
        (<div className=" md:grid md:grid-cols-4 md:grid-rows-3 gap-2 ">
            <div className="md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-3 dark:border-white border border-solid ">
                <img src={country.flags.png} alt={`flag of ${country.name}`} className="w-full"/>
            </div>
            <div className="flex flex-col gap-4 justify-items-center dark:text-gray-300 md:col-start-3 md:col-end-5 ">
                <h3 className=" pt-7 md:pt-0 font-semibold text-xl dark:text-gray-300">{country.name.common}</h3>
                <ul>
                    <li>
                        <span className=" font-medium text-base dark:text-gray-300">Native name:</span> {searchNativeName()}
                    </li>
                    <li>
                        <span className=" font-medium text-base dark:text-gray-300">Population:</span> {country.population}
                    </li>
                    <li>
                        <span className=" font-medium text-base dark:text-gray-300">Region:</span> {country.region}
                    </li>
                    <li>
                        <span className=" font-medium text-base dark:text-gray-300">Sub region:</span> {country.subregion}
                    </li>
                    <li>
                        <span className=" font-medium text-base dark:text-gray-300">Capital:</span> {country.capital}
                    </li>
                </ul>
                <ul>
                    <li><span className=" font-medium text-base dark:text-gray-300">Top level domain:</span> {country.tld}</li>
                    <li><span className=" font-medium text-base">Currencies:</span> {searchCurrencies()}</li>
                    <li className="flex gap-1"><span className=" font-medium text-base dark:text-gray-300">Languages:</span>
                        <ul className="flex gap-1">
                            {searchLanguages()}
                        </ul>
                    </li>
                </ul>
                <div>
                    <span className=" font-medium text-base dark:text-gray-300">Border countries: </span>
                </div>
            </div>
            
        </div>
            )
        }
        
        </div>
    )
}