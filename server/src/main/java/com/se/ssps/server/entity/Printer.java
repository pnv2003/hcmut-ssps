package com.se.ssps.server.entity;



import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.se.ssps.server.entity.configuration.Room;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "printer")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Printer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String printerName;

    private Integer inkAmount;

    private Integer pageAmount;

    private String firm;

    private Integer squarePrinting;

    private String description;

    private Integer efficiency;

    private boolean isDel;


    @OneToOne
    @JoinColumn(name = "room_id", referencedColumnName = "id")
    @JsonIgnore
    private Room room;

    @OneToMany(mappedBy = "printer")
    private List<PrintingLog> printingLogs;
}
