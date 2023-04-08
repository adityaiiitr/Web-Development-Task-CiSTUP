import React from 'react'
import { NavLink,useLocation } from 'react-router-dom'

const Header = () => {
    const { pathname } = useLocation();

  return (
    <>  
        <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink to={`/`} className="flex items-center"> 
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{pathname==='/'?"Respondent Travel Profile":pathname==='/mode-choice'?"Mode Choice":"Invalid Page"}</span>
                    </NavLink>
            </div>
        </nav>
    </>
    )
}

export default Header