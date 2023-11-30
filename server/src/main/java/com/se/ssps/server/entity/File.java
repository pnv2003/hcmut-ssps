package com.se.ssps.server.entity;

import com.se.ssps.server.entity.user.Student;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class File {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String fileName;

    private int size;

    private boolean isDel;

    @ManyToOne
    @JoinColumn(name = "student_id", referencedColumnName = "student_id")
    private Student student;
    
    @OneToOne(mappedBy = "file")
    private PrintingLog printingLog;
}
