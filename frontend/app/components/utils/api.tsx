'use client'

const fetchData = async (url: string) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export const loginUser = async (formData: FormData) => {
    return fetchData("http://localhost:8080/signin");
};

export const registerUser = async (formData: FormData) => {
    return fetchData("http://localhost:8080/signup");
};

export const fetchMyStocks = async () => {
    return fetchData("http://localhost:8080/mystocks");
};

export const fetchBiggestGainer = async () => {
    return fetchData("http://localhost:8080/getbigstock");
};

export const fetchSevenDaysStocks = async () => {
    return fetchData("http://localhost:8080/get7days");
};

export const fetchTodayWeather = async () => {
    return fetchData("http://localhost:8080/gettoday");
};

export const fetchTomorrowWeather = async () => {
    return fetchData("http://localhost:8080/gettomorrow");
};

export const fetchSevenDaysWeather = async () => {
    return fetchData("http://localhost:8080/get7days");
};
