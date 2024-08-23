# Weather Dashboard

## Description

The Weather Dashboard is a web application that uses geolocation and the OpenWeatherAPI to provide real-time weather information. It displays the current temperature, a weather icon, and a personalized greeting based on the weather conditions. 

## Features

- **Geolocation**: Automatically detects the user's location.
- **Weather API Integration**: Fetches current weather data from OpenWeatherAPI.
- **Dynamic Icons**: Changes weather icons based on current weather conditions.
- **Personalized Greeting**: Displays a greeting message tailored to the weather.
- **Temperature Display**: Shows the current temperature in Celsius or Fahrenheit.

## Getting Started

### Prerequisites

- A modern web browser.
- A code editor (e.g., VS Code).
- Node.js and npm (for running a local server, if needed).

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/weather-dashboard.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd weather-dashboard
    ```
3. **Install dependencies** (if any):
    ```bash
    npm install
    ```

### Usage

1. **Open `index.html`** in your web browser to view the dashboard.
2. **Grant location access** when prompted to enable geolocation.
3. The dashboard will automatically fetch and display weather information based on your location.

### API Key

To use the OpenWeatherAPI, you'll need an API key. Sign up at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) and replace `YOUR_API_KEY` in your code with the key provided.

### Code Explanation

- **Geolocation**: Retrieves the user's coordinates using the browser's geolocation API.
- **API Call**: Fetches weather data from the OpenWeatherAPI using the coordinates.
- **DOM Manipulation**: Updates the weather icon, greeting, and temperature displayed on the page based on the fetched data.

### Contributing

Feel free to fork the repository and submit pull requests with improvements or bug fixes.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for the weather data API.
- By Vansh Wadhwa

