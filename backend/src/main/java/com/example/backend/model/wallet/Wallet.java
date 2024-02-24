package com.example.backend.model.wallet;

import com.example.backend.model.user.User;
import com.example.backend.model.weather.Weather;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "wallet")
public class Wallet{
    @Id
    String id;

    @DBRef
    User userid;

    @DBRef
    Weather weatherid;

    public Wallet() {
    }

    public Wallet(User userid, Weather weatherid) {
        this.userid = userid;
        this.weatherid = weatherid;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public User getUserid() {
        return userid;
    }

    public void setUserid(User userid) {
        this.userid = userid;
    }

    public Weather getWeatherid() {
        return weatherid;
    }

    public void setWeatherid(Weather weatherid) {
        this.weatherid = weatherid;
    }
}
