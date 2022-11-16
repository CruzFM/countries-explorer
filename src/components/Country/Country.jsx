import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

export const Country = ()=>{

    const [ country, setCountry ] = useState()

    let { name } = useParams();
    name = name.slice(1)
    console.log(name.trim())

    useEffect( ()=>{
        const endPoint = `https://restcountries.com/v3.1/name/${name}?fullText=true`;
        axios.get(endPoint)
            .then(res => setCountry(res.data[0]) )
    }, [])

    console.log(country)

    return(
        <div className="mx-auto my-0 w-11/12">
        <div>
            Back
        </div>
        <div>
            <div>
                <img src={country.flags.png} alt={`flag of ${country.name}`} className="w-full"/>
            </div>
            <div>
                <h3>{country.name.official}</h3>
            </div>
            <div></div>
        </div>
        
        </div>
    )
}