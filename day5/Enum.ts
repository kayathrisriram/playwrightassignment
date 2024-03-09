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

enum WeatherType{
    Sunny = "Sunny", 
    Rainy ="Rainy", 
    Windy = "Windy", 
    Cloudy ="Cloudy",
     Snowy ="Snowy"
}

let weeklyForecast:WeatherType[]=[WeatherType.Sunny,WeatherType.Rainy,WeatherType.Windy,WeatherType.Cloudy,WeatherType.Snowy,WeatherType.Sunny,WeatherType.Rainy];

function displayForecast()
{
    for (let i =0;i<weeklyForecast.length;i++){
     
        console.log(`Day ${i+1} : ${weeklyForecast[i]}`)
       }
}
displayForecast()