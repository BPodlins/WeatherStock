package com.example.backend.controller;

import com.example.backend.model.weather.WeatherCondition;
import com.example.backend.repository.weather.WeatherConditionRepository;
import com.example.backend.model.weather.Weather;
import com.example.backend.service.weather.WeatherService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.LinkedList;
import java.util.List;

@RestController
public class WeatherController {

   @Autowired
   WeatherService weatherService;

    @Value("${example.backend.weatherAPIKey}")
    private String weatherAPIKey;

    @GetMapping("/admin/getweatherFromAPI")
    public ResponseEntity<List<Weather>> getWeatherInfo() {
        String apiUrl = "https://meteostat.p.rapidapi.com/stations/daily?station=10637&start=2024-01-01&end=2024-01-31";
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.set("X-RapidAPI-Key", weatherAPIKey);
        headers.set("X-RapidAPI-Host", "meteostat.p.rapidapi.com");

        HttpEntity<String> httpEntity = new HttpEntity<>(headers);

        ResponseEntity<String> responseEntity = restTemplate.exchange(
                apiUrl, HttpMethod.GET, httpEntity, String.class);

        String responseBody = responseEntity.getBody();
        List<Weather> weatherList = new LinkedList<>();

        try {
            JSONObject jsonResponse = new JSONObject(responseBody);
            JSONArray dataArray = jsonResponse.getJSONArray("data");

            for (int i = 0; i < dataArray.length(); i++) {
                JSONObject weatherData = dataArray.getJSONObject(i);

                Weather weather = new Weather();
                weather.setDate(weatherData.getString("date"));
                weather.setTemperatureAvg((float) weatherData.getDouble("tavg"));
                weather.setAirPressure((float) weatherData.getDouble("pres"));
                weather.setWindSpeed((float) weatherData.getDouble("wspd"));

                WeatherCondition weatherCondition = new WeatherCondition();
                weather.setWeatherCondition(weatherCondition);

                weatherList.add(weather);
            }

            if (!weatherList.isEmpty()) {
                weatherService.saveAll(weatherList);
            }

        } catch (JSONException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

        return ResponseEntity.ok(weatherList);
    }

    @GetMapping("/getallweather")
    public ResponseEntity<List<Weather>> getWeatherFromDB() {
        List<Weather> allWeather = weatherService.getAllWeather();
        return ResponseEntity.ok(allWeather);
    }

    @DeleteMapping ("admin/deleteAllWeather")
    public ResponseEntity<List<Weather>> deleteAllWeatherFromDB() {
        weatherService.deleteAll();
        return (ResponseEntity<List<Weather>>) ResponseEntity.accepted();
    }

    @GetMapping("/gettoday")
    public ResponseEntity<Weather> getWeatherToday(){
        Weather today = weatherService.getToday();
        return ResponseEntity.ok(today);
    }

    @GetMapping("/gettomorrow")
    public ResponseEntity<Weather> getWeatherTomorrow(){
        Weather tomorrow = weatherService.getTomorrow();
        return ResponseEntity.ok(tomorrow);
    }

    @GetMapping("/get7days")
    public ResponseEntity<List<Weather>> getWeather7(){
        List<Weather> sevenDays = weatherService.get7days();
        return ResponseEntity.ok(sevenDays);
    }
}
