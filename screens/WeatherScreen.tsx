import React, { useEffect, useState } from "react";
import axios from "axios";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import WeatherItem from "../components/WeatherItem";
import { WEATHER_API_KEY } from "@env";

const regions = [
  { name: "北海道", city: "Asahikawa" },
  { name: "東北", city: "Yamagata" },
  { name: "関東", city: "Tokyo" },
  { name: "北陸", city: "Nagano" },
  { name: "東海", city: "Nagoya" },
  { name: "近畿", city: "Osaka" },
  { name: "中国", city: "Hiroshima" },
  { name: "四国", city: "Matsuyama" },
  { name: "九州", city: "Ozu" },
  { name: "沖縄", city: "Okinawa" },
];

interface Weather {
  description: string;
  icon: string;
  name: string;
}

function WeatherScreen() {
  const [weather, setWeather] = useState<Weather[]>([]);

  useEffect(() => {
    regions.forEach(getWeather);
  }, []);

  const getWeather = async (region: { name: string; city: string }) => {
    const uri = `http://api.openweathermap.org/data/2.5/weather?q=${region.city}&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${WEATHER_API_KEY}`;
    const response = await axios.get(uri);
    // debug
    console.log(response);
    const weatherData = response.data.weather[0];
    const weatherItem: Weather = {
      description: weatherData.description,
      icon: `http://openweathermap.org/img/w/${weatherData.icon}.png`,
      name: region.name,
    };
    setWeather((weather) => [...weather, weatherItem]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={weather}
        renderItem={({ item }) => (
          <WeatherItem
            description={item.description}
            icon={item.icon}
            name={item.name}
          />
        )}
        keyExtractor={(item, index) => String(index)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default WeatherScreen;
