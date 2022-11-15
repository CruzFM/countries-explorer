import { DisplayCountries } from "../DisplayCountries/DisplayCountries"
import { SearchAndFilter } from "../SearchAndFilter/SearchAndFilter"


export const Home = ()=>{
    return(
        <>
         <SearchAndFilter />
         <DisplayCountries />
        </>
    )
}