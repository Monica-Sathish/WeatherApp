package com.example.weather.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class WeatherDto  implements Serializable {
    private String id;
    @JsonFormat(shape=JsonFormat.Shape.STRING)
    private LocalDateTime time; //stored in epoch
    private String city;
    private Double humidity;
    private Double dewPoint;
    private Double temperature; //handled backend - based on humid and dewpoint
    private String description; //handled backend - based on temp
    private String icon; //handled backend - based on temp
}
