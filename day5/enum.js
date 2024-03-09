/*
Define a Weather Enum:
Create an enum named WeatherType with the following values: Sunny, Rainy, Windy, Cloudy, and Snowy.
Create Weather Data:
Create an array named weeklyForecast that will store the weather forecast for a week.
The array should contain seven elements, each representing the weather for a day of the week, using the WeatherType enum.
Display the Forecast:
Write a function named displayForecast that iterates through the weeklyForecast array.
The function should print out the weather forecast for each day in a format like: "Day 1: Sunny", "Day 2: Rainy", etc.
*/
var WeatherType;
(function (WeatherType) {
    WeatherType["Sunny"] = "Sunny";
    WeatherType["Rainy"] = "Rainy";
    WeatherType["Windy"] = "Windy";
    WeatherType["Cloudy"] = "Cloudy";
    WeatherType["Snowy"] = "Snowy";
})(WeatherType || (WeatherType = {}));
var weeklyForecast = [1, 2, 3, 4, 5, 6, 7];
function displayForecast() {
    for (var i = 0; i < weeklyForecast.length; i++) {
        for (var j in WeatherType) {
            var val = WeatherType[j];
            console.log("Day ".concat(i + 1, " : ").concat(val[j]));
        }
    }
}
displayForecast();
