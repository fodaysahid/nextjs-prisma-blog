import Link from "next/link";
import React, {useState} from "react";


const NavBar = () => {

    const [toggle, setToggle] = useState(false);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setToggle(!toggle);
    };

    return(

        <>
        <nav className="bg-gray-900">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <div>
                            <Link href="/">
                            <a
                            className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                            >
                            <span className="font-bold text-white text-3xl">Multi-User Blogging Platform</span>
                            </a></Link>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-1">
                        <Link href="/login/">
                            <a
                                className="py-2 px-3 bg-indigo-700 text-white hover:bg-blue-100 hover:text-blue-500 rounded transition duration-300"
                            >
                                Sign In
                            </a>
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button className="mobile-menu-button" onClick={handleClick}>
                            <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div
            className={
                toggle ? 'mobile-menu md:hidden' : 'mobile-menu hidden md:hidden'
            }
            >
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
                    Login
                </a>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
                    Sign Up
                </a>
            </div>
        </nav>
    </>
    )
}

export default NavBar;