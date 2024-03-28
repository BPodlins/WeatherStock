# WeatherStock

WeatherStock is an innovative web application that delivers stock picks based on current weather conditions. The core idea is to examine today's weather and identify similar weather days from the past. For each of those days, the app determines the stocks that showed the most significant gains and presents the top performer. However, the app currently faces several challenges due to limitations such as Java's heap memory cap and the quick exhaustion of free MongoDB memory by stock data, leading to a few compromises:

- Due to memory constraints, live updates of stock information and current data have been discontinued. The app now utilizes weather data from 2023 and stock data ranging from January 1, 2020, to March 14, 2024. This approach is based on the observation that stock data, particularly concerning the largest percentage gains, can exhibit greater year-to-year variability compared to weather data.
- New user registrations are not possible at the moment because of memory issues.
- The app checks current weather parameters through an API for today's biggest gainer, but historical weather data searches are not as comprehensive.
- Functionality to save stocks for monitoring or future purchase is unavailable, again due to memory limitations.

## Tech Stack
- Java
- Spring Boot
- TypeScript
- NextJS
- Tailwind
- GCR
- Vercel

## Future Enhancements
### Fixes
- Implement server-side rendering (SSR) to perform all data fetches in the background globally, allowing pages to simply use the fetched data.
- Modify pages to eliminate the exclusive reliance on client-side rendering.
- Refine authentication mechanisms.

### Features
- Introduce dynamic background changes that reflect the current weather and time of day.
- Add a "MyStocks" feature to enable users to keep track of their preferred stocks, including those received as stock picks of the day.
- Incorporate sliders for finer control over stock selection criteria.

### Minor Adjustments
- Ensure the prominently displayed stock pick remains visible on the homepage, updating only upon user logout.
- Conduct code cleanup, including the removal of unused functions, enhancing readability, renaming functions and parameters for better clarity, and consolidating type definitions currently scattered across individual classes.

#### Login Details
- **Username:** test
- **Password:** test123
