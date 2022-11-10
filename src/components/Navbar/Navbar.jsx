

export const Navbar = ( {handleToggleDarkMode, isDarkMode} )=>{
    return(
        <header className="flex p-3 h-24 md:h-14">
            <span className="mr-auto">
                Where in the world?
            </span>
            <div>
                <span onClick={handleToggleDarkMode}>{isDarkMode ? "Luna": "Sol"}</span>
                <span className="dark:text-pink-300">Dark Mode</span>
            </div>

        </header>
    )
}