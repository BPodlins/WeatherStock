package com.example.backend.model.stock;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collation = "stock")
public class Stock {
    @Id
    private int id;
    private String name;
    private float priceStart;
    private float priceEnd;
    private String percentage;

    public Stock(){

    }

    public Stock(String name, float priceStart, float priceEnd, String percentage) {
        this.name = name;
        this.priceStart = priceStart;
        this.priceEnd = priceEnd;
    }

    public String calculatePercentAndSet(float start, float end){
        float percentage = ((start - end) / start) * 100;
        return String.valueOf(percentage);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPercentage() {
        return percentage;
    }

    public void setPercentage(String percentage) {
        this.percentage = percentage;
    }

    public float getPriceStart() {
        return priceStart;
    }

    public void setPriceStart(float priceStart) {
        this.priceStart = priceStart;
    }

    public float getPriceEnd() {
        return priceEnd;
    }

    public void setPriceEnd(float priceEnd) {
        this.priceEnd = priceEnd;
    }
}