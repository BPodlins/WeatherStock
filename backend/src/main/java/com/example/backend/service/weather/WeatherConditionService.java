package com.example.backend.service.weather;

import com.example.backend.repository.weather.WeatherConditionRepository;
import com.example.backend.model.weather.WeatherCondition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.Optional;

@Service
public class WeatherConditionService {

    @Autowired
    WeatherConditionRepository weatherConditionRepository;

    @Transactional
    public WeatherCondition getCondition(int code) {
        Optional<WeatherCondition> optionalCondition = weatherConditionRepository.findByCode(code);
        return optionalCondition.orElse(null);
    }
}