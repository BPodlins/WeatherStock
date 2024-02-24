import React from "react";
import Link from "next/link";

export default function Nav() {
    return(
        <nav
            className="dark:bg-transparent-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 mb-10 backdrop-blur">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <Link
                            className="self-center text-3xl font-bold whitespace-nowrap dark:text-white"
                            href="../"> WeatherStock </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
                    <Link href="../login"
                            className="text-white bg-700 hover:bg-gray-300 hover:bg-gradient-radial hover:bg-opacity-40 focus:ring-4 focus:outline-none text-xl rounded-lg font-bold px-4 py-2 text-center dark:-600 dark:hover
                            -700 dark:focus:ring
                            -800 shadow-xl">Login
                    </Link>
                    <button data-collapse-toggle="navbar-sticky" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className="justify-items-end justify-between hidden md:flex  md:order-1 bg-gray-100 bg-opacity-30 bg-gradient-radial rounded-md m-3 scale-200"
                     id="navbar-sticky">
                    <ul className="flex flex-col p-5 md:p-0.5 mt-4 font-medium border border-gray-100 rounded-xl bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark-800 md:dark:-900 dark:border-gray-700">
                        <Link href="../weather/"  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-200 md:p-0 md:dark:hover:text-text-gray-200 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            Weather
                        </Link>
                        <Link href="../stock/"  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-200 md:p-0 md:dark:hover:text-text-gray-200 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            Stock
                        </Link>
                        <Link href="../mystocks/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-200 md:p-0 md:dark:hover:text-text-gray-200 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            My Stocks
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>);
}