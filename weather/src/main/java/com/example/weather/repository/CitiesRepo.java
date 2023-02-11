package com.example.weather.repository;

import com.example.weather.entity.Cities;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface CitiesRepo extends MongoRepository<Cities, String> {
    Optional<Cities> findByCity(String city);
}