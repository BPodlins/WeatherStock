'use client'

import React, {useEffect} from "react";
import { useState } from "react";
import Nav from "@/app/components/nav/Nav";
import { ThemeLoader } from "@/app/components/theme/themeLoader";
import {AuthProvider} from "@/app/components/utils/api";

interface Stock {
    id: string;
    name: string;
    priceStart: number;
    priceEnd: number;
    percentage: string;
    date: string;
}

const Home = () => {
    const [theme, setTheme] = useState(ThemeLoader());

    const test = () => {
        console.log(theme[0] +', ' +theme[1] +',' +theme[2]);
    };

    const [biggestGainer, setBiggestGainer] = useState(null);

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

        fetchBiggestGainer();
    }, []);



    return (
        <AuthProvider>
        <main className={`flex items-center justify-center justify-items-center p-32 min-h-screen bg-gradient-to-t from-orange-500 to-blue-500 h-screen w-full`}>
            <Nav />
            <div className="container mx-0 flex items-center justify-center flex-col">
                <button className="bg-no-300 my-8 py-2 px-4 text-sm rounded-md hover:bg-gray-100 hover:bg-opacity-25 hover:bg-blend-hue" onClick={test}>
                    Stock of the day
                </button>
            </div>
        </main>
        </AuthProvider>
    );
};

export default Home;

