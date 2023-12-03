package com.se.ssps.server.entity.configuration;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "building")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Building {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String buildingName;

    private boolean isDel;

    @OneToMany(mappedBy = "building")
    @JsonIgnore
    private List<Room> rooms;

    @ManyToOne
    @JoinColumn(name = "campus_id",referencedColumnName = "id")
    private Campus campus;
}
