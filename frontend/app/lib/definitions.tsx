import {string} from "prop-types";

export type User = {
    id: string;
    username: string;
    mail: string;
    email: string;
}

export type Weather = {
    id: string;
    date: string;
    temperatureAvg: number;
    airPressure: number;
    windSpeed: number;
    weatherCondition: {
        _class: string;
    };
};

export type FormData = {
    username: string;
    password: string;
}

export  type Stock = {
    id: string,
    name: string,
    priceStart: number,
    priceEnd: number,
    percentage: string,
    date: string
};
