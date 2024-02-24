package com.example.backend.repository.weather;

import com.example.backend.model.weather.EWeatherCondition;
import com.example.backend.model.weather.WeatherCondition;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface WeatherConditionRepository extends MongoRepository<WeatherCondition, String> {
    Optional<WeatherCondition> findByCode(int code);
}
