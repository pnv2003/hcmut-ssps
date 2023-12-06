package com.se.ssps.server.entity.configuration;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@Entity
@Table
public class PageUnitPrice {
    @Id
    private Integer price;    
}
