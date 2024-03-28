package com.example.backend.repository.weather;

import com.example.backend.model.weather.Weather;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface WeatherRepository extends MongoRepository<Weather, String> {
    Optional<Weather> findByDate(String date);

    List<Weather> findAllByDateBetween(String startDate, String endDate);

    List<Weather> findByDateBetween(String today, String sevenDaysLater);

    @Query("{ 'temperatureAvg' : { $gt: ?0, $lt: ?1 }, 'airPressure' : { $gt: ?2, $lt: ?3 }, 'windSpeed' : { $gt: ?4, $lt: ?5 } }")
    List<Weather> findSimilarConditions(float tempMin, float tempMax, float pressureMin, float pressureMax, float windSpeedMin, float windSpeedMax);
}
