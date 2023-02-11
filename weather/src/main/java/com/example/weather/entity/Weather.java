package com.example.weather.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.redis.core.RedisHash;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@Document(collection = "weather")
public class Weather {
    @Id
    private String id;
    private LocalDateTime time; //stored in epoch
    private String city;
    private Double humidity;
    private Double dewPoint;
    private Double temperature; //handled backend - based on humid and dewpoint
    private String description; //handled backend - based on temp
    private String icon; //handled backend - based on temp
}
