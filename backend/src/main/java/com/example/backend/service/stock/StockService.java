package com.example.backend.service.stock;

import com.example.backend.model.stock.Stock;
import com.example.backend.model.weather.Weather;
import com.example.backend.parser.StockParser;
import com.example.backend.repository.stock.StockRepository;
import com.example.backend.service.weather.WeatherService;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class StockService {
    @Autowired
    StockRepository stockRepository;

    @Autowired
    WeatherService weatherService;

    @Value("${example.backend.weatherAPIKey}")
    private String weatherAPIKey;

    private StockParser stockParser;
    public Stock getTodayGainer(){
        String todayStr = "2023-03-27";
        List<Stock> stocksForDay = stockRepository.findAllByDate(todayStr);

        if (stocksForDay.isEmpty()) {
            return null;
        }

        Stock biggestGainer = stocksForDay.get(0);
        float maxGain = Float.parseFloat(biggestGainer.getPercentage());

        for (Stock stock : stocksForDay) {
            float currentGain = Float.parseFloat(stock.getPercentage());
            if (currentGain > maxGain) {
                maxGain = currentGain;
                biggestGainer = stock;
            }
        }
        return biggestGainer;
    }

    public List<Stock> get7Days(){
        String sevenDaysAgoStr = "2023-03-19";
        String todayStr = "2023-03-27";
        LocalDate start = LocalDate.parse(sevenDaysAgoStr);
        LocalDate end = LocalDate.parse(todayStr);
        List<Stock> biggestGainers = new ArrayList<>();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        for (LocalDate date = start; !date.isAfter(end); date = date.plusDays(1)) {
            String dateStr = date.format(formatter);
            List<Stock> stocksForDay = stockRepository.findAllByDate(dateStr);

            if (stocksForDay.isEmpty()) {
                continue;
            }

            Stock biggestGainer = stocksForDay.get(0);
            float maxGain = Float.parseFloat(biggestGainer.getPercentage());

            for (Stock stock : stocksForDay) {
                float currentGain = Float.parseFloat(stock.getPercentage());
                if (currentGain > maxGain) {
                    maxGain = currentGain;
                    biggestGainer = stock;
                }
            }

            biggestGainers.add(biggestGainer);
        }

        return biggestGainers;
    }

    public Stock getGainer(){
        String todayStr = LocalDate.now().toString();
        String apiUrl = "https://meteostat.p.rapidapi.com/stations/daily?station=10637&start=" + todayStr + "&end=" + todayStr;
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.set("X-RapidAPI-Key", weatherAPIKey);
        headers.set("X-RapidAPI-Host", "meteostat.p.rapidapi.com");

        HttpEntity<String> httpEntity = new HttpEntity<>(headers);
        ResponseEntity<String> responseEntity = restTemplate.exchange(apiUrl, HttpMethod.GET, httpEntity, String.class);
        String responseBody = responseEntity.getBody();

        Weather todayWeather = null;
        try {
            JSONObject jsonResponse = new JSONObject(responseBody);
            JSONArray dataArray = jsonResponse.getJSONArray("data");

            if (dataArray.length() > 0) {
                JSONObject weatherData = dataArray.getJSONObject(0);

                todayWeather = new Weather();
                todayWeather.setDate(weatherData.getString("date"));
                todayWeather.setTemperatureAvg((float) weatherData.getDouble("tavg"));
                todayWeather.setAirPressure((float) weatherData.getDouble("pres"));
                todayWeather.setWindSpeed((float) weatherData.getDouble("wspd"));
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

        if (todayWeather == null) {
            return null;
        }

        List<Stock> stocks = findStocksForSimilarWeatherConditions(todayWeather);

        return stocks.stream().max(Comparator.comparing(stock -> Float.parseFloat(stock.getPercentage()))).orElse(null);
    }

    private List<Stock> findStocksForSimilarWeatherConditions(Weather todayWeather) {
        List<Weather> allWeathers = weatherService.getAllWeather();

        float temperatureMargin = 3.0f;
        float pressureMargin = 20.0f;
        float windSpeedMargin = 5.0f;

        List<Weather> similarWeathers = allWeathers.stream().filter(weather ->
                Math.abs(weather.getTemperatureAvg() - todayWeather.getTemperatureAvg()) <= temperatureMargin &&
                        Math.abs(weather.getAirPressure() - todayWeather.getAirPressure()) <= pressureMargin &&
                        Math.abs(weather.getWindSpeed() - todayWeather.getWindSpeed()) <= windSpeedMargin
        ).collect(Collectors.toList());

        List<Stock> biggestGainers = new ArrayList<>();

        for (Weather weather : similarWeathers) {
            List<Stock> stocksForDay = stockRepository.findAllByDate(weather.getDate());
            Stock biggestGainer = stocksForDay.stream()
                    .max(Comparator.comparing(stock -> Float.parseFloat(stock.getPercentage())))
                    .orElse(null);

            if (biggestGainer != null) {
                biggestGainers.add(biggestGainer);
            }
        }

        return biggestGainers;
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
