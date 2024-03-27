'use client'

import Nav from "@/app/components/nav/Nav";
import React, {useEffect, useState} from "react";
import theme from "tailwindcss/defaultTheme";
import {WiDaySunny} from "react-icons/wi";
import { AiOutlineStock } from "react-icons/ai";

export default function Stock(){
    const [biggestGainer, setBiggestGainer] = useState(null);
    const [sevenDaysStocks, setSevenDaysStocks] = useState([]);

    useEffect(() => {
        const fetchBiggestGainer = async () => {
            try {
                const response = await fetch("http://localhost:8080/getBigGainer");
                const data = await response.json();
                setBiggestGainer(data);
            } catch (error) {
                console.error("Error fetching biggest gainer data:", error);
            }
        };

        const fetchSevenDaysStocks = async () => {
            try {
                const response = await fetch("http://localhost:8080/get7Days");
                const data = await response.json();
                setSevenDaysStocks(data);
            } catch (error) {
                console.error("Error fetching 7 days stocks data:", error);
            }
        };

        fetchBiggestGainer();
        fetchSevenDaysStocks();
    }, []);

    return (
        <main className={`min-h-screen bg-gradient-to-t from-orange-500 to-blue-500`}>
            <Nav />
            <section className={`container mx-auto p-32`}>
                <div className={"mx-auto grid grid-cols-2 gap-8 mx-auto"}>
                    <div
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt=""/>
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Biggest gainer</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price from; Price to; %gain</p>
                            <a href="https://finance.yahoo.com/gainers/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAEHdC7H11IV2pbOx-79MKIGJ_jgkdGxvkwnoYoOcjXO_KyvqNbLMRwPi1x7-CC8MGdlHSDMXiVZvvRzmUfFjhZ6mzUNPq_n7hmibA-Qkyk_tEwEe7TAqdjCkE4vk26_Hmsqi1uyA3hhcBnoI8jQRwPPUEF3KWf88F5pSNaxXzZSr"
                               className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <div
                            className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex items-center justify-between mb-4">
                                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Last 7 days</h5>
                            </div>
                            <div className="flow-root">
                                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <li className="py-3 sm:py-4">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <AiOutlineStock className="w-8 h-8 rounded-full"/>
                                            </div>
                                            <div className="flex-1 min-w-0 ms-4">
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    Name
                                                </p>
                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    price
                                                </p>
                                            </div>
                                            <div
                                                className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                percent%
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                        <div className="flex items-center ">
                                            <div className="flex-shrink-0">
                                                <AiOutlineStock className="w-8 h-8 rounded-full"/>
                                            </div>
                                            <div className="flex-1 min-w-0 ms-4">
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    Name
                                                </p>
                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    price
                                                </p>
                                            </div>
                                            <div
                                                className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                percent%
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <AiOutlineStock className="w-8 h-8 rounded-full"/>
                                            </div>
                                            <div className="flex-1 min-w-0 ms-4">
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    Name
                                                </p>
                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    price
                                                </p>
                                            </div>
                                            <div
                                                className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                percent%
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                        <div className="flex items-center ">
                                            <div className="flex-shrink-0">
                                                <AiOutlineStock className="w-8 h-8 rounded-full"/>
                                            </div>
                                            <div className="flex-1 min-w-0 ms-4">
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    Name
                                                </p>
                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    price
                                                </p>
                                            </div>
                                            <div
                                                className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                percent%
                                            </div>
                                        </div>
                                    </li>
                                    <li className="pt-3 pb-0 sm:pt-4">
                                        <div className="flex items-center ">
                                            <div className="flex-shrink-0">
                                                <AiOutlineStock className="w-8 h-8 rounded-full"/>
                                            </div>
                                            <div className="flex-1 min-w-0 ms-4">
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    Name
                                                </p>
                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    price
                                                </p>
                                            </div>
                                            <div
                                                className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                percent%
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}