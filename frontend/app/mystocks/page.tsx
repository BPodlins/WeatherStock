'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';
import Nav from "@/app/components/nav/Nav";
import { useAuth } from "@/app/components/utils/api";

interface Stock {
    id: string;
    name: string;
    priceStart: number;
    priceEnd: number;
    percentage: string;
    date: string;
}

const MyStocks = () => {
    const [stocksData, setStocksData] = useState<Stock[]>([]);
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        // Redirect the user to the login page if not authenticated
        if (!isAuthenticated) {
            router.push('/login');
            return;
        }

        const jwtTokenName = 'asleep';
        const cookies = parseCookies();
        const jwtToken = cookies[jwtTokenName];

        const fetchStocksData = async () => {
            try {
                const response = await fetch("http://localhost:8080/mystocks", {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${jwtToken}`,
                    },
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const data: Stock[] = await response.json();
                setStocksData(data);
            } catch (error) {
                console.error("Error fetching stocks data:", error);
            }
        };

        fetchStocksData();
    }, [isAuthenticated, router]);

    return (
        <div>
            <Nav />
            <section className="flex w-full p-32 bg-gradient-to-t from-orange-500 to-blue-500 h-screen w-full">
                <div className="content-center align-middle self-center mt-20 w-full rounded-lg">
                    <h2 className="text-xl text-white-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white-400 opacity-75">Your stocks:</h2>
                    {stocksData.length > 0 ? (
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Stock name</th>
                                <th scope="col" className="px-6 py-3">Price Start</th>
                                <th scope="col" className="px-6 py-3">Price End</th>
                                <th scope="col" className="px-6 py-3">% Change</th>
                                <th scope="col" className="px-6 py-3">Date</th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700">
                            {stocksData.map(stock => (
                                <tr key={stock.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{stock.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{stock.priceStart}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{stock.priceEnd}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{stock.percentage}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{stock.date}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No stocks data available.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default MyStocks;