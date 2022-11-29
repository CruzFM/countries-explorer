

export const Footer = ()=>{
    return(
        <footer className="flex flex-col justify-center items-center border-t-2 mt-2 h-28 p-3 bg-white dark:bg-slate-800">
            <h5 className="text-sm dark:text-gray-300 p-2">
                Developed by <a href="https://fernandocruz.vercel.app" className="hover:text-cyan-500">Fernando Cruz</a>
            </h5>
            <h6 className="text-xs dark:text-gray-300">Challenge by <a href="https://frontendmentor.io" className="hover:text-cyan-500">Frontend Mentor</a></h6>
        </footer>
    )
}