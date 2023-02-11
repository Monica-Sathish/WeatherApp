package com.example.weather.service.impl;

import com.example.weather.dto.WeatherDto;
import com.example.weather.entity.Cities;
import com.example.weather.entity.Weather;
import com.example.weather.repository.CitiesRepo;
import com.example.weather.repository.WeatherRepo;
import com.example.weather.service.WeatherService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class WeatherServiceImpl implements WeatherService {
    @Autowired
    WeatherRepo weatherRepository;

    @Autowired
    CitiesRepo citiesRepo;

    @Override
    @CacheEvict(value = "weather", key = "#city")
    public List<WeatherDto> getWeatherStatus(String city, LocalDateTime time) {
        List<Weather> weatherList = weatherRepository.getWeather(time, time.plusDays(6), city);
        return weatherList.stream().map(this::convertToDto).collect(Collectors.toList()).subList(0, ((weatherList.size()>=6) ? 6 : weatherList.size()));
    }

    @Override
    @CacheEvict(value = "weather", key = "#city")
    public List<WeatherDto> getWeatherWeek(String city, LocalDateTime time) {
        List<Weather> weatherList = weatherRepository.getWeather(time, time.plusDays(6), city);
        List<WeatherDto> weatherDtoList = weatherList.stream().map(this::convertToDto).collect(Collectors.toList());
        List<WeatherDto> weekList = new ArrayList<>();
        time = weatherDtoList.get(0).getTime();
        for (int i=0;i<weatherDtoList.size();i++) {
            if(weatherDtoList.get(i).getTime().getDayOfYear() >= time.getDayOfYear()) {
                weekList.add(weatherDtoList.get(i));
                time = weatherDtoList.get(i).getTime().plusDays(1);
            }
        }
        return weekList.subList(0, ((weekList.size()>=7) ? 7 : weekList.size()));
    }

    @Override
    @CacheEvict (value = "weather")
    public List<WeatherDto> getAll() {
        return weatherRepository.findAll().stream().map(this::convertToDto).collect(Collectors.toList());
    }

    @Override
    public WeatherDto findById(String id) {
        return convertToDto(weatherRepository.findById(id).get());
    }

    @Override
    @CachePut (value = "weather", key = "{#weatherDto}")
    public WeatherDto postWeather(WeatherDto weatherDto) {
        if(weatherDto == null || weatherDto.getCity() == null || weatherDto.getHumidity() == null || weatherDto.getDewPoint() == null || weatherDto.getTime() == null) {
            weatherDto.setId("Empty");
            return weatherDto;
        }
        saveCity(weatherDto.getCity());
        weatherDto.setTemperature(calculateTemp(weatherDto.getDewPoint(), weatherDto.getHumidity()));
        weatherDto.setDescription(findDescription(weatherDto.getTemperature(), weatherDto.getHumidity()));
        weatherDto.setIcon(findIcon(weatherDto.getDescription()));
        Weather weather = weatherRepository.save(conversion(weatherDto));
        weatherDto.setId(weather.getId());
        return weatherDto;
    }

    @Override
    @CachePut (value = "weather", key = "{#weatherDto}")
    public WeatherDto updateWeather(WeatherDto weatherDto) {
       Weather weather = weatherRepository.findById(weatherDto.getId()).get();
       weather.setDewPoint(weatherDto.getDewPoint());
       weather.setHumidity(weatherDto.getHumidity());
       weather.setTime(weatherDto.getTime());
       weatherRepository.save(weather);
       return convertToDto(weather);
    }

    @Override
    @CacheEvict(value = "weather", key="#id")
    public void deleteWeather(String id) {
        weatherRepository.deleteById(id);
    }

    @Override
    public List<String> cityList() {
        return citiesRepo.findAll().stream().map(Cities::getCity).collect(Collectors.toList());
    }

    private WeatherDto convertToDto (Weather weather) {
        WeatherDto weatherDto = new WeatherDto();
        BeanUtils.copyProperties(weather, weatherDto);
        return weatherDto;
    }

    private Double calculateTemp(Double dewPoint, Double humidity) {
        Double constM = 17.625;
        Double constK = 243.04;
        Double constDew = (constM*dewPoint)/(constK+dewPoint);
        Double log = Math.log(humidity/100);
        Double temp = constK*(constDew-log)/(constM+log-constDew);
        temp = Double.parseDouble(new DecimalFormat("##.##").format(temp));
        return temp;
    }

    private Weather conversion (WeatherDto weatherDto) {
        Weather weather = new Weather();
        BeanUtils.copyProperties(weatherDto, weather);
        return weather;
    }

    private String findDescription(Double temp, Double humidity) {
        if(temp <= -30) {
            return "Unbearable Freezing Cold";
        } else if (temp <= -10) {
            return "Freezing Cold";
        } else if (temp <= 0 ) {
            return "Cold";
        } else if (temp <= 10) {
            return "Cold";
        } else if (temp >= 11 && temp <= 19) {
            return "Cool";
        } else if (temp >= 20 && temp <= 25) {
            if (humidity >= 90 && humidity <=100) {
                return "Heavy Rain";
            } else if (humidity >= 70 && humidity < 90) {
                return "Light Shower";
            } else {
                return "Partly Cloud";
            }
        } else if (temp >= 26 && temp <= 30) {
            if (humidity >= 70 && humidity < 90) {
                return "Cloudy";
            } else {
                return "Partly Cloud";
            }
        } else if (temp >= 31 && temp <= 50) {
            return "Sunny";
        }
        return "Climate Unpredictable";
    }

    private String findIcon (String desc) {
        switch (desc) {
            case "Unbearable Freezing Cold" :
                return "338";
            case "Freezing Cold" :
                return "332";
            case "Cold" :
                return "326";
            case "Cool":
                return "122";
            case "Heavy Rain" :
                return "308";
            case "Light Shower" :
                return "353";
            case "Cloudy" :
                return "119";
            case "Partly Cloud" :
                return "116";
            case "Sunny" :
                return "113";
            default :
                return "176";
        }
    }

    private void saveCity(String city) {
        Optional<Cities> optionalCities = citiesRepo.findByCity(city);
        if (optionalCities.isPresent())
            return;
        else {
            Cities cities = new Cities();
            cities.setCity(city);
            citiesRepo.save(cities);
        }
    }
}