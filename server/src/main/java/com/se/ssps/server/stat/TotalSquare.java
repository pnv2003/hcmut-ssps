package com.se.ssps.server.stat;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class TotalSquare {
    private String name;
    private Double stat;

}
