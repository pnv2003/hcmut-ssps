package com.se.ssps.server.entity.configuration;

import java.time.LocalDate;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table (name = "page_allocation")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PageAllocation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String semester;

    private Integer year;

    private LocalDate allocatedDate;

    private Integer numOfPage;

    private boolean status;

    public PageAllocation(String semester, Integer year, Integer numOfPage, boolean status){
        this.semester = semester;
        this.numOfPage = numOfPage;
        this.year = year;
        this.status = status;
    }
}
