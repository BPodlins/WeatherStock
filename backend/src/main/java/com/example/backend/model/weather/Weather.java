package com.example.backend.model.weather;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "weather")
public class Weather {
    @Id
    private String id;

    private String date;
    private float temperatureAvg;

    private float airPressure;

    private float windSpeed;

    private WeatherCondition weatherCondition;

    public Weather(){

    }

    public Weather(String date, float temperatureAvg, float airPressure, float windSpeed, WeatherCondition weatherCondition) {
        this.date = date;
        this.temperatureAvg = temperatureAvg;
        this.airPressure = airPressure;
        this.windSpeed = windSpeed;
        this.weatherCondition = weatherCondition;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getWeather() {
        return date;
    }

    public void setWeather(String weather) {
        this.date = weather;
    }

    public float getTemperatureAvg() {
        return temperatureAvg;
    }

    public void setTemperatureAvg(float temperatureAvg) {
        this.temperatureAvg = temperatureAvg;
    }

    public float getAirPressure() {
        return airPressure;
    }

    public void setAirPressure(float airPressure) {
        this.airPressure = airPressure;
    }

    public float getWindSpeed() {
        return windSpeed;
    }

    public void setWindSpeed(float windSpeed) {
        this.windSpeed = windSpeed;
    }

    public WeatherCondition getWeatherCondition() {
        return weatherCondition;
    }

    public void setWeatherCondition(WeatherCondition weatherCondition) {
        this.weatherCondition = weatherCondition;
    }


}