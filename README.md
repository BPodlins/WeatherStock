# WeatherStock

WeatherStock is a web app that returns stock picks based on the current weather. The idea behind the app is to check the current weather, then search for days in the past with similar weather conditions. From there, it calculates the biggest gainers from each of those days. Unfortunately, due to several limitations, like Java's heap memory limit and the free MongoDB memory capacity being quickly filled by stock data, there have been some compromises:

- The current data and stock info aren't updated anymore because there's no more memory.
- Only one or two more users can be registered due to the memory problem.
- When you ask for the biggest gainer of the day, I check the current weather parameters, but the historical weather search isn't thorough.
- Saving stocks that you bought or would like to watch does not work, also memory problem

## Tech stack:
- Java
- Spring Boot
- TypeScript
- NextJS
- Tailwind

## Future ToDo:
- Get "MyStocks" feature working properly.
- Solve the memory problem, either by upgrading the MongoDB tier or through other measures.
- Make the background change depending on the weather and time of day.
