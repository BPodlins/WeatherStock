'use client'

import theme from "tailwindcss/defaultTheme";
import React from 'react';
import Nav from "@/app/components/nav/Nav";
import { fetchWithCredentials } from '../components/utils/api';
import { GetServerSideProps } from 'next';

interface Stock {
    id: string;
    name: string;
    priceStart: number;
    priceEnd: number;
    percentage: string;
    date: string;
}

interface MyStocksProps {
    stocksData: Stock[];
}

const getServerSideProps: GetServerSideProps = async (context) => {
    const serverSideHeaders = {Cookie: context.req.headers.cookie || ''};

    try {
        const validateSessionEndpoint = 'http://localhost:8080/validateSession';
        await fetchWithCredentials(validateSessionEndpoint, {}, serverSideHeaders);

        // If validation is successful, proceed to fetch the stocks data
        const stocksEndpoint = 'http://localhost:8080/mystocks';
        const stocksData = await fetchWithCredentials(stocksEndpoint, {}, serverSideHeaders);

        return {props: {stocksData}};
    } catch (error) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }
};

const MyStocks: React.FC<MyStocksProps> = ({ stocksData }) => {
    return (
        <section className={`flex w-full p-32 bg-gradient-to-t from-orange-500 to-blue-500 h-screen w-full`}>
            <Nav />
            <div className="content-center align-middle self-center mt-20 w-full rounded-lg">
                <h2 className="text-xl text-white-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white-400 opacity-3">Your stocks:</h2>
                {stocksData && stocksData.length > 0 ? (
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
    );
};

export default MyStocks;