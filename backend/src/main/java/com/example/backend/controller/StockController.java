package com.example.backend.controller;

import com.example.backend.model.stock.Stock;
import com.example.backend.model.weather.Weather;
import com.example.backend.service.stock.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StockController {

    //https://polygon.io/docs/stocks/get_v2_aggs_grouped_locale_us_market_stocks__date

    @Autowired
    StockService stockService;

    @GetMapping("/getbigstock")
    public ResponseEntity<List<Stock>> getBigStock(){
        return null;
    }

    @GetMapping("/get7daysStock")
    public ResponseEntity<List<Stock>> get7days(){
        return null;
    }

    @GetMapping("/mystocks")
    public ResponseEntity<List<Stock>> userStocks(){
        return null;
    }

    @GetMapping("admin/parseStocksAndLoadToDB1")
    public ResponseEntity<List<Stock>> allStocks1(){
        stockService.saveAll1();
        return ResponseEntity.ok(stockService.getStockParser().getStockList());
    }

    @GetMapping("admin/parseStocksAndLoadToDB2")
    public ResponseEntity<List<Stock>> allStocks2(){
        stockService.saveAll2();
        return ResponseEntity.ok(stockService.getStockParser().getStockList());
    }

    @GetMapping("admin/parseStocksAndLoadToDB3")
    public ResponseEntity<List<Stock>> allStocks3(){
        stockService.saveAll3();
        return ResponseEntity.ok(stockService.getStockParser().getStockList());
    }

    @GetMapping("admin/parseStocksAndLoadToDB4")
    public ResponseEntity<List<Stock>> allStocks4(){
        stockService.saveAll4();
        return ResponseEntity.ok(stockService.getStockParser().getStockList());
    }

    @GetMapping("admin/clearAll")
    public void clearAll(){
        stockService.deleteAll();
    }
}
