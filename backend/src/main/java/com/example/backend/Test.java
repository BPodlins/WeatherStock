package com.example.backend;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Test {
    public static void main(String[] args) {
        String originalDateString = "20080812";

        // Define the date format for parsing the original date
        SimpleDateFormat originalFormat = new SimpleDateFormat("yyyyMMdd");

        // Define the date format for formatting the parsed date
        SimpleDateFormat desiredFormat = new SimpleDateFormat("yyyy-MM-dd");

        try {
            // Parse the original date string
            Date date = originalFormat.parse(originalDateString);

            // Format the parsed date to the desired format
            String formattedDateString = desiredFormat.format(date);

            // Print the formatted date string
            System.out.println("Original date: " + originalDateString);
            System.out.println("Formatted date: " + formattedDateString);

        } catch (ParseException e) {
            e.printStackTrace();
        }
    }
}
