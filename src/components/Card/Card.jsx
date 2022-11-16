import { Link } from "react-router-dom"


export const  Card  = (props)=>{
    return(
        <div className=" w-4/5 md:w-full pt-0 pb-3 px-0  h-80 grid grid-rows-2 dark:bg-slate-700 bg-white dark:text-white">
            <div className="row-start-1 row-end-2">
                <img className="w-full h-full" src={props.flag} alt={`${props.name} flag`}/>
            </div>
            <div className="row-start-2 row-end-4 px-3 py-2">
                <h3>{props.name}</h3>
                <p>Population: {props.population}</p>
                <p>Region: {props.region}</p>
                <p>Capital: {props.capital}</p>
                <Link to={`/countries:${props.name}`}>A ver</Link>
            </div>
        </div>
    )
}