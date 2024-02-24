'use client'

import Nav from "@/app/components/nav/Nav";
import React, {useEffect, useState} from "react";
import theme from "tailwindcss/defaultTheme";

export default function MyStocks(){
    const [stocksData, setStocksData] = useState([]);

    useEffect(() => {
        const fetchStocksData = async () => {
            try {
                const response = await fetch("http://localhost:8080/mystocks");
                const data = await response.json();
                setStocksData(data);
            } catch (error) {
                console.error("Error fetching stocks data:", error);
            }
        };

        fetchStocksData();
    }, []);

    return (
        <section className={`flex w-full p-32 bg-gradient-to-t from-[${theme[0]}] via-[${theme[1]}] to-[${theme[2]}]`}>
            <Nav/>
                <div className="content-center align-middle self-center mt-20 w-full rounded-lg">
                    <h2 className="text-xl text-white-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white-400 opacity-3">Your stocks:</h2>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Stock name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ticker
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Buy date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Exchange Index
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                % growth
                            </th>
                        </tr>
                        </thead>
                        <tbody className="rounded-xl">
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 r">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                ----
                            </th>
                            <td className="px-6 py-4">
                                ----
                            </td>
                            <td className="px-6 py-4">
                                ----
                            </td>
                            <td className="px-6 py-4">
                                ----
                            </td>
                            <td className="px-6 py-4">
                                ---
                            </td>
                            <td className="px-6 py-4">
                                ---
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                ----
                            </th>
                            <td className="px-6 py-4">
                                ----
                            </td>
                            <td className="px-6 py-4">
                                ----
                            </td>
                            <td className="px-6 py-4">
                                ----
                            </td>
                            <td className="px-6 py-4">
                                ---
                            </td>
                            <td className="px-6 py-4">
                                ---
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                ---
                            </th>
                            <td className="px-6 py-4">
                                ---
                            </td>
                            <td className="px-6 py-4">
                                ---
                            </td>
                            <td className="px-6 py-4">
                                ---
                            </td>
                            <td className="px-6 py-4">
                                ---
                            </td>
                            <td className="px-6 py-4">
                                ---
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>
    )
}