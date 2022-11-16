import { Link } from "react-router-dom"


export const  Card  = (props)=>{
    return(
        <div className=" w-4/5 md:w-full p-3 px-5 border border-solid border-black h-full grid grid-rows-2">
            <div className="row-start-1 row-end-2">
                <img className="w-full" src={props.flag} alt={`${props.name} flag`}/>
            </div>
            <div className="row-start-2 row-end-4">
                <h3>{props.name}</h3>
                <p>Population: {props.population}</p>
                <p>Region: {props.region}</p>
                <p>Capital: {props.capital}</p>
                <Link to="/countries:name">A ver</Link>
            </div>
        </div>
    )
}