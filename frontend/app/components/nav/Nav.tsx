import React, { useState } from "react";
import Link from "next/link";
// Ensure you adjust this import according to where your useAuth hook is located in your project
import { useAuth } from "@/app/components/utils/api";

const Nav: React.FC = () => {
    const { isAuthenticated, logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle for the mobile menu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="dark:bg-transparent-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 mb-10 backdrop-blur">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="self-center text-3xl font-bold whitespace-nowrap dark:text-white">WeatherStock
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {isAuthenticated ? (
                        <button onClick={() => logout()} className="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none text-xl rounded-lg font-bold px-4 py-2 text-center dark:hover:bg-blue-700 shadow-xl">Logout</button>
                    ) : (
                        <Link href="/login"  className="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none text-xl rounded-lg font-bold px-4 py-2 text-center dark:hover:bg-orange-500 shadow-xl">Login
                        </Link>
                    )}
                    <button onClick={toggleMenu} className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <div className={`justify-between items-center ${isMenuOpen ? "flex" : "hidden"} md:flex md:w-auto w-full`} id="navbar-sticky">
                    <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <Link href="/weather"
                                className="block text-2xl py-2 px-4 text-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white">Weather
                            </Link>
                        </li>
                        <li>
                            <Link href="/stock"
                              className="block text-2xl py-2 px-4 text-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white">Stock
                            </Link>
                        </li>
                        <li>
                            <Link href="/mystocks" className="block text-2xl  py-2 px-4 text-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white">My Stocks
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
