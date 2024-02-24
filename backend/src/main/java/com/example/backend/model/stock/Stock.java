package com.example.backend.model.stock;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collation = "stock")
public class Stock {
    @Id
    private int id;
    private String name;
    private float price;

    private float percentage;

    public Stock(){

    }

    public Stock(String name, float price, float percentage) {
        this.name = name;
        this.price = price;
        this.percentage = percentage;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public float getPercentage() {
        return percentage;
    }

    public void setPercentage(float percentage) {
        this.percentage = percentage;
    }

    @Override
    public String toString() {
        return "StockParameters{" +
                "name='" + name + '\'' +
                ", price=" + price +
                ", percentage=" + percentage +
                '}';
    }
}