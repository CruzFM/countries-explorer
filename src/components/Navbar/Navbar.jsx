import moonEmpty from "../../images/moon-empty.png";
import moonFull from "../../images/moon-full.png";

export const Navbar = ( {handleToggleDarkMode, isDarkMode} )=>{
    return(
        <header className="flex p-3 h-24 md:h-14 bg-white shadow dark:bg-slate-800">
            <span className="mr-auto dark:text-gray-300 flex justify-center items-center">
                Where in the world?
            </span>
            <div className="flex items-center justify-between">
                <span onClick={handleToggleDarkMode} className="dark:text-white px-2">
                    {isDarkMode ? (<img src={moonFull} alt="press dark mode" className="w-5"/>)
                    : (<img src={moonEmpty} alt="press dark mode" className=" w-5"/>) }
                </span>
                <span className="dark:text-gray-300">Dark Mode</span>
            </div>

        </header>
    )
}