package com.example.backend.service.weather;

import com.example.backend.model.weather.Weather;
import com.example.backend.repository.weather.WeatherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Service
public class WeatherService {

    @Autowired
    private WeatherRepository weatherRepository;

    public Weather getWeather(String date) {
        return weatherRepository.findByDate(date).orElse(null);
    }

    public List<Weather> getAllWeather() {
        return weatherRepository.findAll();
    }

    public List<Weather> get7days() {
        LocalDate today = LocalDate.now().plusDays(1);
        LocalDate sevenDaysAgo = today.minusDays(7);

        String todayStr = today.toString();
        String sevenDaysAgoStr = sevenDaysAgo.toString();

        return weatherRepository.findByDateBetween(sevenDaysAgoStr, todayStr);
    }

    public Weather getTomorrow() {
        String tomorrowRegex = LocalDate.now().plusDays(1).toString();
        return weatherRepository.findByDate(tomorrowRegex).orElseThrow();
    }

    public Weather getToday() {
        String todayDate = LocalDate.now().toString();
        return weatherRepository.findByDate(todayDate).orElseThrow();
    }


    public List<Weather> get7daysHardCoded() {
        LocalDate today = LocalDate.now().plusDays(1);
        LocalDate sevenDaysAgo = today.minusDays(7);

        String todayStr = today.toString();
        String sevenDaysAgoStr = sevenDaysAgo.toString();

        return weatherRepository.findByDateBetween(sevenDaysAgoStr, todayStr);
    }

    public Weather getTomorrowHardCoded() {
        String tomorrowRegex = LocalDate.now().plusDays(1).toString();
        return weatherRepository.findByDate(tomorrowRegex).orElseThrow();
    }

    public Weather getTodayHardCoded() {
        String todayDate = LocalDate.now().toString();
        return weatherRepository.findByDate(todayDate).orElseThrow();
    }

    public void deleteAll(){
        weatherRepository.deleteAll();
    }

    public Optional<List<Weather>> getSimilar(Weather weather) {
        final float TEMPERATURE_MARGIN = 2.0f;
        final float AIR_PRESSURE_MARGIN = 100.0f;
        final float WIND_SPEED_MARGIN = 2.0f;

        float tempMin = weather.getTemperatureAvg() - TEMPERATURE_MARGIN;
        float tempMax = weather.getTemperatureAvg() + TEMPERATURE_MARGIN;
        float pressureMin = weather.getAirPressure() - AIR_PRESSURE_MARGIN;
        float pressureMax = weather.getAirPressure() + AIR_PRESSURE_MARGIN;
        float windSpeedMin = weather.getWindSpeed() - WIND_SPEED_MARGIN;
        float windSpeedMax = weather.getWindSpeed() + WIND_SPEED_MARGIN;

        List<Weather> similarWeather = weatherRepository.findSimilarConditions(tempMin, tempMax, pressureMin, pressureMax, windSpeedMin, windSpeedMax);

        return Optional.ofNullable(similarWeather.isEmpty() ? null : similarWeather);
    }

    private Weather getWeatherByRegex(String regex) {
        Pattern pattern = Pattern.compile(regex);
        return weatherRepository.findAll().stream()
                .filter(weather -> pattern.matcher(weather.getDate()).matches())
                .findFirst()
                .orElse(null);
    }

    public Weather getWeatherById(String id) {
        return weatherRepository.findById(id).orElse(null);
    }

    @Transactional
    public boolean deleteWeatherById(String id) {
        if (weatherRepository.existsById(id)) {
            weatherRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }

    @Transactional
    public void saveWeather(Weather weather) {
        weatherRepository.save(weather);
    }

    public void saveAll(List<Weather> weatherList) {
        weatherRepository.saveAll(weatherList);
    }
}
