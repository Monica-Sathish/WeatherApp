package com.example.weather.repository;

import com.example.weather.entity.Weather;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface WeatherRepo extends MongoRepository<Weather, String>{

    @Query(value = "{time : { $gte: ?0, $lte: ?1 }, city : ?2}", sort = "{time: 1}")
    List<Weather> getWeather(LocalDateTime start, LocalDateTime end, String city);

}
