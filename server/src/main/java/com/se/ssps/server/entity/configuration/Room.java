package com.se.ssps.server.entity.configuration;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.se.ssps.server.entity.Printer;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "room")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String roomName;

    @OneToOne(mappedBy = "room")
    @JsonIgnore
    private Printer printer;

    @ManyToOne
    @JoinColumn(name = "building_id",referencedColumnName = "id")
    private Building building;

    private boolean isDel;

    private boolean havePrinter;

    public boolean equals(Room room){
        if (this.id.equals(room.getId())) return true;
        return false;
    }
}
