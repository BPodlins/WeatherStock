package com.example.backend.service.stock;

import com.example.backend.model.stock.Stock;
import com.example.backend.model.weather.Weather;
import com.example.backend.parser.StockParser;
import com.example.backend.repository.stock.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockService {
    @Autowired
    StockRepository stockRepository;

    private StockParser stockParser;

    public void deleteAll(){
        stockRepository.deleteAll();
    }

    public void saveAll1() {
        stockParser = new StockParser();
        stockParser.reloadList1();
        stockRepository.saveAll(stockParser.getStockList());
    }

    public void saveAll01() {
        stockParser = new StockParser();
        stockParser.reloadList01();
        stockRepository.saveAll(stockParser.getStockList());
    }

    public void saveAll2() {
        stockParser = new StockParser();
        stockParser.reloadList2();
        stockRepository.saveAll(stockParser.getStockList());
    }

    public void saveAll02() {
        stockParser = new StockParser();
        stockParser.reloadList02();
        stockRepository.saveAll(stockParser.getStockList());
    }

    public void saveAll3() {
        stockParser = new StockParser();
        stockParser.reloadList3();
        stockRepository.saveAll(stockParser.getStockList());
    }

    public void saveAll03() {
        stockParser = new StockParser();
        stockParser.reloadList03();
        stockRepository.saveAll(stockParser.getStockList());
    }

    public void saveAll4() {
        stockParser = new StockParser();
        stockParser.reloadList4();
        stockRepository.saveAll(stockParser.getStockList());
    }

    public void saveAll04() {
        stockParser = new StockParser();
        stockParser.reloadList04();
        stockRepository.saveAll(stockParser.getStockList());
    }

    public StockParser getStockParser() {
        return stockParser;
    }

    public void setStockParser(StockParser stockParser) {
        this.stockParser = stockParser;
    }
}
