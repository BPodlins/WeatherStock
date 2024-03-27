package com.example.backend.service.stock;

import com.example.backend.model.stock.Stock;
import com.example.backend.model.weather.Weather;
import com.example.backend.parser.StockParser;
import com.example.backend.repository.stock.StockRepository;
import com.example.backend.service.weather.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class StockService {
    @Autowired
    StockRepository stockRepository;

    @Autowired
    WeatherService weatherService;

    private StockParser stockParser;

    public Stock getTodayGainer(){
        return stockRepository.findByDate("2023-03-27");
    }

    public List<Stock> get7Days(){
        String todayStr = "2023-03-27";
        String sevenDaysAgoStr = "2023-03-19";

        return stockRepository.findByDateBetween("", "");
    }

    public Stock getGainer(){
        Weather weather = weatherService.getToday();
        Optional<List<Weather>> similarWeathers = weatherService.getSimilar(weather);
        if (similarWeathers.isPresent() && !similarWeathers.get().isEmpty()) {
            List<String> dates = new ArrayList<>();
            for (Weather w : similarWeathers.get()) {
                dates.add(w.getDate());
            }

            List<Stock> stocksForDates = stockRepository.findByDates(dates);
            Stock topGainer = null;
            float maxGain = Float.MIN_VALUE;

            for (Stock stock : stocksForDates) {
                float priceStart = stock.getPriceStart();
                float priceEnd = stock.getPriceEnd();
                float percentageGain = ((priceEnd - priceStart) / priceStart) * 100;

                if (percentageGain > maxGain) {
                    maxGain = percentageGain;
                    topGainer = stock;
                }
            }

            return topGainer;
        }
        return null;
    }

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
