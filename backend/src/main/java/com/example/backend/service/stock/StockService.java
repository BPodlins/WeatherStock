package com.example.backend.service.stock;

import com.example.backend.parser.StockParser;
import com.example.backend.repository.stock.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StockService {
    @Autowired
    StockRepository stockRepository;

    private final StockParser stockParser = new StockParser();

    private final String nasdaqEtfsPath = "data/daily/us/nasdaq etfs";
    private final String nasdaqStocksPath = "data/daily/us/nasdaq stocks";
    private final String nyseStocksPath = "data/daily/us/nyse stocks";

    public void loadNasdaqEtfs(){
        try {
            stockParser.parseStocks(nasdaqEtfsPath);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public void loadNasdaqStocks(){
        try {
            stockParser.parseStocks(nasdaqStocksPath);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public void loadNyseStocks(){
        try {
            stockParser.parseStocks(nyseStocksPath);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
