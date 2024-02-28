package com.example.backend.parser;

import com.example.backend.model.stock.Stock;
import java.io.BufferedReader;
import java.io.FileReader;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

public class StockParser {
    private List<Stock> stockList = new LinkedList<>();

    public StockParser() {

    }

    public void parseStocks(String filePath) throws Exception {
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] data = line.split(",");
                String name = data[0];
                float priceStart = Float.parseFloat(data[4]);
                float priceEnd = Float.parseFloat(data[7]);
                String dateString = data[2];
                Date date = parseDate(dateString);
                String percentage = calculatePercentAndSet(priceStart, priceEnd);
                Stock stock = new Stock(name, priceStart, priceEnd, percentage);
                stock.setDate(date);
                stockList.add(stock);
            }
        }
    }

    private Date parseDate(String dateString) throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
        Date date = sdf.parse(dateString);
        return date;
    }

    private String calculatePercentAndSet(float start, float end) {
        float percentage = ((start - end) / start) * 100;
        return String.valueOf(percentage);
    }

    public List<Stock> getStockList() {
        return stockList;
    }

    public void setStockList(List<Stock> stockList) {
        this.stockList = stockList;
    }
}