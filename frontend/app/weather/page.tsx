'use client'

import React, { useState, useEffect } from "react";
import Nav from "@/app/components/nav/Nav";
import {WiDaySunny, WiCloudy} from "react-icons/wi";
import  { Weather } from "../lib/definitions"

export default function Weather() {
    const [todayWeather, setTodayWeather] = useState<Weather | null>(null);
    const [tomorrowWeather, setTomorrowWeather] = useState<Weather | null>(null);
    const [sevenDaysWeather, setSevenDaysWeather] = useState<Weather[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const todayResponse = await fetch("https://weatherstock---weatherstock-vertvxcn4q-uc.a.run.app//gettoday");
                const todayData = await todayResponse.json();
                setTodayWeather(todayData);

                const tomorrowResponse = await fetch("https://weatherstock---weatherstock-vertvxcn4q-uc.a.run.app//gettomorrow");
                const tomorrowData = await tomorrowResponse.json();
                setTomorrowWeather(tomorrowData);

                const sevenDaysResponse = await fetch("https://weatherstock---weatherstock-vertvxcn4q-uc.a.run.app//get7days");
                const sevenDaysData = await sevenDaysResponse.json();
                setSevenDaysWeather(sevenDaysData);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <main className={`min-h-screen bg-gradient-to-t from-orange-500 to-blue-500`}>
            <Nav />
            <section className={`container mx-auto p-32`}>
            <div className="grid grid-cols-2 gap-8 mx-auto">
                <div className="grid grid-rows-2 gap-8 mx-auto">
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Today's weather
                        </h5>
                        {todayWeather && (
                            <div>
                                <p>Date: {todayWeather.date}</p>
                                <p>Temperature: {todayWeather.temperatureAvg} degrees</p>
                                <p>Air Pressure: {todayWeather.airPressure} hPa</p>
                            </div>
                        )}
                    </div>
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        {/* Tomorrow's Weather */}
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Tomorrow's weather
                        </h5>
                        {tomorrowWeather && (
                            <div>
                                <p>Date: {tomorrowWeather.date}</p>
                                <p>Temperature: {tomorrowWeather.temperatureAvg} degrees</p>
                                <p>Air Pressure: {tomorrowWeather.airPressure} hPa</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Last 7 days in another column */}
                <div className="grid grid-rows-1 gap-8">
                    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                            Last 7 days
                        </h5>
                        <div className="flow-root">
                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                {sevenDaysWeather.map((day, index) => (
                                    <li key={index} className="py-3 sm:py-4">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <WiDaySunny size={30}/>
                                            </div>
                                            <div className="flex-1 min-w-0 ms-4">
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    {day.date}
                                                </p>
                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    {day.airPressure} hPa
                                                </p>
                                            </div>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                {day.temperatureAvg} degrees
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