import { Link } from "react-router-dom"


export const  Card  = (props)=>{
    return(
        <div className="w-32 p-3 px-5 border border-solid border-black">
            <h3>{props.name}</h3>
            <p>Population: {props.population}</p>
            <p>Region: {props.region}</p>
            <p>Capital: {props.capital}</p>
            <Link to="/countries:name">A ver</Link>
        </div>
    )
}