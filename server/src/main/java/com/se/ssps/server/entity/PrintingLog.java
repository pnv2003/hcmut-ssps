package com.se.ssps.server.entity;

import java.time.LocalDateTime;

import com.se.ssps.server.entity.user.Student;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PrintingLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int numOfCopies;

    private boolean isHori;

    @Enumerated(EnumType.STRING)
    private PageType pageType;

    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime startDate;

    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime endDate;

    @OneToOne
    @JoinColumn(name = "file_id",referencedColumnName = "id")
    private File file;

    @ManyToOne
    @JoinColumn(name = "printer_id",referencedColumnName = "id")
    private Printer printer;

    @ManyToOne
    @JoinColumn(name = "student_id", referencedColumnName = "student_id")
    private Student student;
}
