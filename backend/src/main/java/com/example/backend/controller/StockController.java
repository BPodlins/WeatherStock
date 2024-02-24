package com.example.backend.controller;

import com.example.backend.service.stock.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StockController {

    @Autowired
    StockService stockService;

    @GetMapping("/getbigstock")
    public void getBigStock(){

    }

    @GetMapping("/get7daysStock")
    public void get7days(){

    }

    @GetMapping("/mystocks")
    public void userStocks(){

    }
}
