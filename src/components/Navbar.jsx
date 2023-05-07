import { useState } from "react";
import{ close, logo, menu} from '../assets'
import { navLinks} from '../constants'

function Navbar ()  {
    const [toggle, setToggle] = useState(false)
    return ( 
        <nav className=" w-full flex py-6 justify-between items-center navbar float-left ">
            <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
            <ul className=" list-none sm:list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li key={nav.id}
                        className={`font-poppins cursor-pointer text-white font-normal text-[16px]  ${index === navLinks.length - 1? 'mr-0':'mr-10'}`}>
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>
            <div className=" sm:hidden flex flex-1 justify-end items-center">
                <img  src={toggle ? close : menu} alt="menu" className="focus:outline-none  cursor-pointer object-contain w-[28px] h-[28px]" onClick={() => setToggle((prev) => !prev)} />
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-10 right-0 mx-2 my-4 rounded-xl sidebar min-w-[140px] `}>
                <ul className=" list-none sm:list-none flex flex-col justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li key={nav.id}
                        className={`font-poppins cursor-pointer text-white font-normal text-[16px]  ${index === navLinks.length - 1? 'mr-0':'mb-4'}`}>
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;