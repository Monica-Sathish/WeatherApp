package com.example.weather.service;

import com.example.weather.dto.WeatherDto;

import java.time.LocalDateTime;
import java.util.List;

public interface WeatherService {
    List<WeatherDto> getWeatherStatus(String city, LocalDateTime time);
    List<WeatherDto> getWeatherWeek(String city, LocalDateTime time);
    List<WeatherDto> getAll();
    WeatherDto findById(String id);
    WeatherDto postWeather(WeatherDto weatherDto);
    WeatherDto updateWeather (WeatherDto weatherDto);
    void deleteWeather (String id);
    List<String> cityList();
}