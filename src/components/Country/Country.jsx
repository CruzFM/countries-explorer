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
            <div>
                <h3>{country.name.common}</h3>
                <ul>
                    <li>
                        <span>Native name:</span> {searchNativeName()}
                    </li>
                    <li>
                        <span>Population:</span> {country.population}
                    </li>
                    <li>
                        <span>Region:</span> {country.region}
                    </li>
                    <li>
                        <span>Sub region:</span> {country.subregion}
                    </li>
                    <li>
                        <span>Capital:</span> {country.capital}
                    </li>
                </ul>
                <ul>
                    <li><span>Top level domain:</span> {country.tld}</li>
                    <li><span>Currencies:</span> {searchCurrencies()}</li>
                    <li><span>Languages:</span>
                        <ul>
                            {searchLanguages()}
                        </ul>
                    </li>
                </ul>
            </div>
            <div></div>
            
        </div>
            )
        }
        
        </div>
    )
}