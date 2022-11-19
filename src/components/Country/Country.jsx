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
        
        (<div>
            <div>
                <img src={country.flags.png} alt={`flag of ${country.name}`} className="w-full"/>
            </div>
            <div className="flex flex-col gap-2 justify-items-center">
                <h3>{country.name.common}</h3>
                <ul>
                    <li>
                        <h5>Native name:</h5> {searchNativeName()}
                    </li>
                    <li>
                        <h5>Population:</h5> {country.population}
                    </li>
                    <li>
                        <h5>Region:</h5> {country.region}
                    </li>
                    <li>
                        <h5>Sub region:</h5> {country.subregion}
                    </li>
                    <li>
                        <h5>Capital:</h5> {country.capital}
                    </li>
                </ul>
                <ul>
                    <li><h5>Top level domain:</h5> {country.tld}</li>
                    <li><h5>Currencies:</h5> {searchCurrencies()}</li>
                    <li><h5>Languages:</h5>
                        <ul>
                            {searchLanguages()}
                        </ul>
                    </li>
                </ul>
                <div>
                    <h5>Border countries: </h5>
                </div>
            </div>
            
        </div>
            )
        }
        
        </div>
    )
}