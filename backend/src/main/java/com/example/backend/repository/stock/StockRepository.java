package com.example.backend.repository.stock;

import com.example.backend.model.stock.Stock;
import com.example.backend.model.weather.Weather;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;

@Repository
public interface StockRepository extends MongoRepository<Stock, String> {
    @Query("{ 'date' : { $in: ?0 } }")
    List<Stock> findByDates(List<String> dates);

    Stock findByDate(String s);

    List<Stock> findByDateBetween(String today, String sevenDaysLater);

    List<Stock> findAllByDate(String todayStr);

    List<Stock> findAllByDateBetween(String todayStr, String sevenDaysAgoStr);
}
