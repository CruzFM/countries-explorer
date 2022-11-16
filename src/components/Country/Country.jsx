import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

export const Country = ()=>{

    let { name } = useParams();
    name = name.slice(1)
    console.log(name.trim())

    useEffect( ()=>{
        const endPoint = `https://restcountries.com/v3.1/name/${name}?fullText=true`;
        axios.get(endPoint)
            .then(res => console.log(res))
    }, [])


    return(
        <h1>
            Hola Fer, soy {name}
        </h1>
    )
}