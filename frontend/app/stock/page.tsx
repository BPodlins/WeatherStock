'use client'

import React, { useState, useEffect } from "react";
import Nav from "@/app/components/nav/Nav";
import { AiOutlineStock } from "react-icons/ai";

type Stock = {
    id: string;
    name: string;
    priceStart: number;
    priceEnd: number;
    percentage: string;
    date: string;
};

export default function StockTracker() {
    const [biggestGainer, setBiggestGainer] = useState<Stock | null>(null);
    const [sevenDaysStocks, setSevenDaysStocks] = useState<Stock[]>([]);

    useEffect(() => {
        const fetchBiggestGainer = async () => {
            try {
                const response = await fetch("http://localhost:8080/getTodaysStock");
                const data = await response.json();
                setBiggestGainer(data);
            } catch (error) {
                console.error("Error fetching biggest gainer data:", error);
            }
        };

        const fetchSevenDaysStocks = async () => {
            try {
                const response = await fetch("http://localhost:8080/get7DaysStock");
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
                <div className="grid grid-cols-2 gap-8 mx-auto">
                    <div>
                        {/* Biggest Gainer */}
                        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                Biggest Gainer
                            </h5>
                            {biggestGainer && (
                                <div>
                                    <p>Name: {biggestGainer.name}</p>
                                    <p>Price Start: {biggestGainer.priceStart} $</p>
                                    <p>Price End: {biggestGainer.priceEnd} $</p>
                                    <p>Percentage gain: {parseFloat(biggestGainer.percentage).toFixed(2)}%</p>
                                    <p>Date: {biggestGainer.date}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Last 7 Days Stocks */}
                    <div>
                        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                                Last 7 Days
                            </h5>
                            <div className="flow-root">
                                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {sevenDaysStocks.map((stock, index) => (
                                        <li key={index} className="py-3 sm:py-4">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <AiOutlineStock className="w-8 h-8"/>
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        Name: {stock.name}
                                                    </p>
                                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                        Date: {stock.date}
                                                    </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    Gain: {parseFloat(stock.percentage).toFixed(2)}%
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
