package com.example.backend.repository.stock;

import com.example.backend.model.stock.Stock;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

@Repository
public interface StockRepository extends MongoRepository<Stock, String> {
    @Query("{ 'date' : { $in: ?0 } }")
    List<Stock> findByDates(List<String> dates);
}
