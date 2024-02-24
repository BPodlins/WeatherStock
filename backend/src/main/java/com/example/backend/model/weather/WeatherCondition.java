package com.example.backend.model.weather;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Optional;

@Document(collection = "weather_condition")
public class WeatherCondition {

    @Id
    private String id;
    private int code;
    private EWeatherCondition name;

    public WeatherCondition() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public EWeatherCondition getName() {
        return name;
    }

    public void setName(EWeatherCondition name) {
        this.name = name;
    }
}
