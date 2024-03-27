package com.example.backend.parser;

import com.example.backend.model.stock.Stock;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

public class StockParser {
    private List<Stock> stockList = new LinkedList<>();

    private final String nasdaqEtfsPath = "data/daily/us/nasdaq etfs";
    private final String nasdaqStocksPath1 = "data/daily/us/nasdaq stocks/1";
    private final String nasdaqStocksPath2 = "data/daily/us/nasdaq stocks/2";

    private final String nasdaqStocksPath3 = "data/daily/us/nasdaq stocks/3";

    private final String nyseEtfsPath1 = "data/daily/us/nyse etfs/1";
    private final String nyseEtfsPath2 = "data/daily/us/nyse etfs/2";
    private final String nyseStocksPath1 = "data/daily/us/nyse stocks/1";
    private final String nyseStocksPath2 = "data/daily/us/nyse stocks/2";

    public StockParser() {
    }

    public void parseStocks(String directoryPath) throws Exception {
        File directory = new File(directoryPath);
        File[] files = directory.listFiles();
        if (files != null) {
            for (File file : files) {
                if (file.isFile()) {
                    parseStockFile(file);
                }
            }
        } else {
            System.out.println("Directory does not exist or is not accessible: " + directoryPath);
        }
    }

    public void parseStockFile(File file) throws Exception {
        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            br.readLine();
            String line;
            while ((line = br.readLine()) != null) {
                String[] data = line.split(",");
                String name = data[0];
                float priceStart = Float.parseFloat(data[4]);
                float priceEnd = Float.parseFloat(data[7]);
                String dateString = data[2];
                String date = parseDate(dateString);
                String percentage = calculatePercentAndSet(priceStart, priceEnd);
                Stock stock = new Stock();
                stock.setName(name);
                stock.setPriceStart(priceStart);
                stock.setPriceEnd(priceEnd);
                stock.setPercentage(percentage);
                stock.setDate(date);
                int border = 2019;
                String preParse = stock.getDate();
                int afterParse = Integer.parseInt(preParse.substring(0, 4));
                if (border < afterParse) {
                    stockList.add(stock);
                }
            }
        }
    }

    public void reloadList1(){
        loadFromDirectory1();
    }

    public void reloadList01(){
        loadFromDirectory01();
    }

    public void reloadList2(){
        loadFromDirectory2();
    }

    public void reloadList02(){
        loadFromDirectory02();
    }

    public void reloadList3(){
        loadFromDirectory3();
    }

    public void reloadList03(){
        loadFromDirectory03();
    }

    public void reloadList4(){
        loadFromDirectory4();
    }

    public void reloadList04(){
        loadFromDirectory04();
    }

    private void loadFromDirectory1(){
        try {
            this.parseStocks(this.nasdaqEtfsPath);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private void loadFromDirectory01(){
        try {
            this.parseStocks(this.nasdaqStocksPath1);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }

    private void loadFromDirectory2(){
        try {
            this.parseStocks(this.nasdaqStocksPath2);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private void loadFromDirectory02(){
        try {
            this.parseStocks(this.nasdaqStocksPath3);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private void loadFromDirectory3(){
        try {
            this.parseStocks(this.nyseEtfsPath1);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private void loadFromDirectory03(){
        try {
            this.parseStocks(this.nyseEtfsPath2);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private void loadFromDirectory4(){
        try {
            this.parseStocks(this.nyseStocksPath1);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private void loadFromDirectory04(){
        try {
            this.parseStocks(this.nyseStocksPath2);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private String parseDate(String dateString) throws ParseException {
        SimpleDateFormat originalFormat = new SimpleDateFormat("yyyyMMdd");
        SimpleDateFormat desiredFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date date = originalFormat.parse(dateString);
        String formattedDateString = desiredFormat.format(date);
        return formattedDateString;
    }

    private String calculatePercentAndSet(float start, float end) {
        float percentage = ((end - start) / start) * 100;
        return String.valueOf(percentage);
    }

    public List<Stock> getStockList() {
        return stockList;
    }

    public void setStockList(List<Stock> stockList) {
        this.stockList = stockList;
    }
}