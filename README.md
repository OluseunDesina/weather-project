# Weather Forecast Dashboard

## Objective
This Angular application provides a platform to:
- Search for a city and view its current weather.
- View a 5-day weather forecast for the selected city.

## Features
- **Search Bar Component**: Allows users to input a city name.
- **Weather Display Component**: Displays current weather details such as temperature, humidity, and description.
- **Forecast Component**: Shows a 5-day weather forecast in a tabular or card format.

### State Management
- I am using RxJS to get return the data from the API calls to the component and SIgnals to update the values in the component.

### Routing
- Implements lazy loading for the forecast component.
- Default route (`/`) displays the search bar and current weather.
- `/forecast` route displays the 5-day forecast.

### API Integration
- Integrates with the OpenWeather API or a similar public weather API.
- Example endpoint: `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`.
- Requires an API key, which can be generated for free from the OpenWeather website.


### Styling
- I used TailwindCSS for a responsive and visually appealing layout.

## Installation and Setup
1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd weather-dashboard
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Add Environment Variables:
   ```bash
   ng generate environments[options]
   ```
5. Obtain an API key from [OpenWeather](https://openweathermap.org/) and create an environment file:
   ```bash
   echo "apiKey:your_apiKey_here" > src/environments/environment.ts
   ```
6. Start the application:
   ```bash
   ng serve
   ```
7. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```

## Assumptions
- The API key is obtained by the developer and configured in the environment file.
- The application is intended for demonstration purposes and might not handle high volumes of requests.

## Notes
- Ensure you adhere to the rate limits of the weather API.
- Use environment variables for storing sensitive information like the API key.

## Deliverables
- Full source code in this repository.
- A functional application that can be run locally with minimal setup.

