package com.example.weather.controller;

import com.example.weather.dto.WeatherDto;
import com.example.weather.service.WeatherService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@Slf4j
@RequestMapping(value = "/weather")
@CrossOrigin(value = "*")
public class WeatherController {
    @Autowired
    WeatherService weatherService;

    @GetMapping("/{city}")
    List<WeatherDto> getWeatherStatus(@PathVariable("city") String city, final HttpServletResponse response) throws Exception{
        LocalDateTime time = LocalDateTime.now();
        //response.setHeader("Cache-Control", "no-cache");
        List<WeatherDto> weatherDtoList;
        try {
            weatherDtoList = weatherService.getWeatherStatus(city, time);
        } catch (Exception e) {
            System.out.println(e);
            weatherDtoList = new ArrayList<>();
        }
        return weatherDtoList;
    }

    @GetMapping("/week/{city}")
    List<WeatherDto> getWeatherWeek(@PathVariable("city") String city) throws Exception {
        LocalDateTime time = LocalDateTime.now();
        List<WeatherDto> weatherDtoList;
        try {
            weatherDtoList = weatherService.getWeatherStatus(city, time);
        } catch (Exception e) {
            System.out.println(e);
            weatherDtoList = new ArrayList<>();
        }
        return weatherDtoList;
    }

    @PostMapping("/add")
    WeatherDto postWeather(@RequestBody WeatherDto weatherDto){
        return  weatherService.postWeather(weatherDto);
    }

    @PutMapping("/update")
    WeatherDto updateWeather (@RequestBody WeatherDto weatherDto) {
        return weatherService.updateWeather(weatherDto);
    }

    @DeleteMapping("/delete/{id}")
    void deleteWeather (@PathVariable("id") String id) { weatherService.deleteWeather(id); }

    @GetMapping("/get/cities")
    public List<String> cityList() {
        return weatherService.cityList();
    }

    @GetMapping("/weather/weatherid/{id}")
    public WeatherDto weatherById (@PathVariable("id") String id) throws Exception {
        WeatherDto weatherDto;
        try {
            weatherDto = weatherService.findById(id);
        } catch (Exception e) {
            weatherDto = null;
        }
        return weatherDto;
    }

    @GetMapping("/get/all")
    public List<WeatherDto> getAll() {
        return weatherService.getAll();
    }
}
