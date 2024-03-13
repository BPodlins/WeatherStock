'use client'

import Nav from "@/app/components/nav/Nav";
import React, {useEffect, useState} from "react";
import theme from "tailwindcss/defaultTheme";

import { fetchWithCredentials } from '../utils/api';

export async function getServerSideProps(context) {
    const serverSideHeaders = { Cookie: context.req.headers.cookie || '' };

    try {
        // Attempt to fetch a protected resource or validate the session/token
        const authCheckUrl = "http://localhost:8080/validateSession"; // Example URL
        await fetchWithCredentials(authCheckUrl, {}, serverSideHeaders);

        // If the above request succeeds, fetch the actual data for the page
        const data = await fetchWithCredentials("http://localhost:8080/mystocks", {}, serverSideHeaders);

        // If successful, return the data to the page
        return { props: { stocksData: data } };
    } catch (error) {
        // If authentication fails, redirect to login
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }
}

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