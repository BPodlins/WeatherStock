'use client'

import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import Nav from "@/app/components/nav/Nav";
import { AuthContext, AuthContextType } from "@/app/components/utils/api";
import {ThemeLoader} from "@/app/components/theme/themeLoader";

interface Stock {
    id: string;
    name: string;
    priceStart: number;
    priceEnd: number;
    percentage: string;
    date: string;
}

const Home = () => {
    const [theme, setTheme] = useState(() => ThemeLoader());
    const [biggestGainer, setBiggestGainer] = useState<Stock | null>(null);
    const [buttonClicked, setButtonClicked] = useState(false);
    const { isAuthenticated } = useContext(AuthContext) as AuthContextType;
    const router = useRouter();

    const fetchBiggestGainer = async () => {
        if (!isAuthenticated) {
            router.push('/login');
            return;
        }

        try {
            const response = await fetch("https://weatherstock---weatherstock-vertvxcn4q-uc.a.run.app/getTodaysStock");
            if (!response.ok) {
                throw new Error("Failed to fetch");
            }
            const data = await response.json();
            setBiggestGainer(data);
            setButtonClicked(true);
        } catch (error) {
            console.error("Error fetching biggest gainer data:", error);
        }
    };

    const test = () => {
        console.log(theme[0] + ', ' + theme[1] + ', ' + theme[2]);
        fetchBiggestGainer();
    };

    return (
        <main className="flex items-center justify-center justify-items-center p-32 min-h-screen bg-gradient-to-t from-orange-500 to-blue-500 h-screen w-full">
            <Nav />
            <div className="container mx-0 flex items-center justify-center flex-col">
                {!buttonClicked && (
                    <button className="bg-no-300 my-8 py-2 px-4 text-sm rounded-md hover:bg-gray-100 hover:bg-opacity-25 hover:bg-blend-hue" onClick={test}>
                        Stock of the day
                    </button>
                )}
                {biggestGainer && (
                    <div className="bg-white bg-opacity-25 p-4 rounded-md">
                        <p>Name: {biggestGainer.name}</p>
                        <p>Price Start: {biggestGainer.priceStart}</p>
                        <p>Price End: {biggestGainer.priceEnd}</p>
                        <p>Percentage gain: {parseFloat(biggestGainer.percentage).toFixed(2)}%</p>
                        <p>Date: {biggestGainer.date}</p>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Home;

