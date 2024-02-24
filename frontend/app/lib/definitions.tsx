import {string} from "prop-types";

type User = {
    id: string;
    username: string;
    mail: string;
    email: string;
}

type Weather = {
    id: string;
    date: string;
    temperatureAvg: number;
    airPressure: number;
    windSpeed: number;
    weatherCondition: {
        _class: string;
    };
};
