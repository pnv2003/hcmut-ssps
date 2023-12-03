package com.se.ssps.server.entity.configuration;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "campus")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Campus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String campusName;

    private boolean isDel;

    @OneToMany(mappedBy = "campus")
    @JsonIgnore
    private List<Building> buildings;

    public boolean equals(Campus newCampus){
        if (this.id.equals(newCampus.getId())) return true;
        return false;
    }
}
