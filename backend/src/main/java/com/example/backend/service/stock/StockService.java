package com.example.backend.service.stock;

import com.example.backend.repository.stock.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StockService {
    @Autowired
    StockRepository stockRepository;
}
