import { Link } from "react-router-dom"


export const  Card  = (props)=>{
    return(
        <div className=" w-4/5 md:w-full pt-0 pb-3 px-0 h-80  grid grid-rows-2 dark:bg-slate-700 bg-white dark:text-gray-300">
            <div className="row-start-1 row-end-2">
                <Link to={`/countries:${props.name}`}>
                 <img className="w-full h-full" src={props.flag} alt={`${props.name} flag`}/>
                </Link>
            </div>
            <div className="row-start-2 row-end-4 px-3 py-1">
                <h3 className=" py-3 font-bold text-lg">{props.name}</h3>
                <p><span className="font-medium ">Population:</span> {props.population}</p>
                <p><span className="font-medium ">Region:</span> {props.region}</p>
                <p><span className="font-medium ">Capital:</span> {props.capital}</p>
            </div>
        </div>
    )
}