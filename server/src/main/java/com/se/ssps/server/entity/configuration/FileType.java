package com.se.ssps.server.entity.configuration;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "fileType")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class FileType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String fileTypeName;

    // private boolean type;

}
